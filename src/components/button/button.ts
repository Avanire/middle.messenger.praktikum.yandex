import Block from '../../core/block/block.ts';
import { TButtonProps } from './type.ts';

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
