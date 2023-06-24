import Block from '../../core/block/block';
import { TButtonProps } from './type';

export default class Button extends Block {
    constructor(props: TButtonProps) {
        super({
            ...props,
            events: {
                click: props.onClick,
            },
        });
    }

    render(): string {
        const {
            mixin, id, type, name,
        } = this.props;

        return `
            <button class="btn ${mixin}" id="${id}" type="${type}">${name}</button>
        `;
    }
}
