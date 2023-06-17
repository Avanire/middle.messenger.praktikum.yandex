import { v4 as makeUUID } from 'uuid';
import Handlebars from 'handlebars';
import EventBus from '../eventBus.ts';
import { TProps } from '../../utils/types.ts';
import { deepEquals } from '../../utils/utils.ts';
import { EVENTS } from '../../utils/constant.ts';

class Block {
    _element: HTMLElement;

    _id: string;

    eventBus: () => EventBus;

    props: TProps;

    children: Record<string, Block>;

    constructor(propsAndChildren: TProps = {}) {
        const eventBus = new EventBus();

        const { children, props } = this._getChildren(propsAndChildren);

        this.children = children;

        this._id = makeUUID();

        this.props = this._makePropsProxy({ ...props, _id: this._id });

        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        this._makePropsProxy = this._makePropsProxy.bind(this);
        eventBus.emit(EVENTS.INIT);
    }

    _getChildren(propsAndChildren: TProps) {
        const children = {} as typeof this.children;
        const props = {} as TProps;

        Object.entries(propsAndChildren).forEach(([key, value]): void => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { children, props };
    }

    _registerEvents(eventBus: EventBus): void {
        eventBus.on(EVENTS.INIT, this.init.bind(this));
        eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(EVENTS.FLOW_CWU, this._componentWillUnmount.bind(this));
        eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    init(): void {
        this.eventBus().emit(EVENTS.FLOW_RENDER);
    }

    _checkInDom() {
        const elementInDOM = document.body.contains(this._element);

        if (elementInDOM) {
            setTimeout(() => this._checkInDom(), 1000);
            return;
        }

        this.eventBus().emit(EVENTS.FLOW_CWU, this.props);
    }

    _componentDidMount(): void {
        this._checkInDom();
        this.componentDidMount();
    }

    componentDidMount(): boolean {
        return true;
    }

    dispatchComponentDidMount(): void {
        this.eventBus().emit(EVENTS.FLOW_CDM);
    }

    _componentDidUpdate(oldProps: TProps, newProps: TProps): void {
        const response: boolean = this.componentDidUpdate(oldProps, newProps);

        if (response) {
            return;
        }

        this.eventBus().emit(EVENTS.FLOW_RENDER);
    }

    componentDidUpdate(oldProps: TProps, newProps: TProps): boolean {
        return deepEquals(oldProps, newProps);
    }

    _componentWillUnmount() {
        this.destroy();
        this.componentWillUnmount();
    }

    public componentWillUnmount(): boolean {
        return true;
    }

    setProps = (nextProps: TProps): void => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element(): HTMLElement {
        return this._element;
    }

    _addEvents(): void {
        const { events } = this.props;

        if (events) {
            Object.entries(events as Record<string, () => void>)
                .forEach(([eventName, callback]) => {
                    this._element.addEventListener(eventName, callback);
                });
        }
    }

    _removeEvents(): void {
        const { events } = this.props;

        if (events) {
            Object.entries(events as Record<string, () => void>)
                .forEach(([eventName, callback]) => {
                    this._element.removeEventListener(eventName, callback);
                });
        }
    }

    compile(template: string, props: TProps): DocumentFragment {
        const propsAndStabs = { ...props };

        Object.entries(this.children).forEach(([key, child]) => {
            propsAndStabs[key] = `<div data-id="${child._id}"></div>`;
        });

        const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

        fragment.innerHTML = Handlebars.compile(template)({
            ...propsAndStabs,
            children: this.children,
        });

        Object.values(this.children).forEach((child: Block) => {
            const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

            if (stub) {
                stub.replaceWith(child.getContent() as HTMLElement);
            }
        });

        return fragment.content;
    }

    _render(): void {
        const block = this.render();
        const documentFragment = this.compile(block, { ...this.props });
        const newBlock = documentFragment.firstElementChild as HTMLElement;

        if (this._element) {
            this._removeEvents();

            this._element.replaceWith(newBlock);
        }

        this._element = newBlock;

        this._addEvents();
    }

    render(): string {
        return '';
    }

    getContent(): HTMLElement {
        return this.element;
    }

    _createDocumentElement(tagName: string): HTMLElement {
        const element = document.createElement(tagName);
        element.setAttribute('data-id', this._id);

        return element;
    }

    _makePropsProxy(props: TProps) {
        return new Proxy(props, {
            get: (target: TProps, prop: string) => {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set: (target: TProps, prop: string, value) => {
                const oldProps = { ...target };

                target[prop] = value;

                this.eventBus().emit(EVENTS.FLOW_CDU, oldProps, target);

                return true;
            },
            deleteProperty: () => {
                throw new Error('No access');
            },
        });
    }

    show(): void {
        this.getContent().style.display = 'flex';
    }

    hide(): void {
        this.getContent().style.display = 'none';
    }

    destroy() {
        this._element.remove();
    }
}

export default Block;
