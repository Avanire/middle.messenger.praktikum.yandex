import Block from '../../core/block/block';
import { TArrowButton } from './type';

export default class ArrowButton extends Block {
    constructor(props: TArrowButton) {
        super({
            ...props,
            events: {
                click: props.onClick,
            },
        });
    }

    render(): string {
        const {
            id, type, image, mixin,
        } = this.props;

        return `
            <button class="arrow-button ${mixin}" id="${id}" type="${type}">
                ${image ? `<img src="${image}" alt="" width="16" height="16">` : ''}                    
            </button>
        `;
    }
}
