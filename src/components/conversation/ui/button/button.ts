import Block from '../../../../core/block/block.ts';
import { TButton } from './type.ts';

export default class Button extends Block {
    constructor(props: TButton) {
        super(props);
    }

    render(): string {
        const { name, image, type } = this.props;

        return `
            <button class="additional-menu__item" type="button" id="${type}">
                <img src="${image}" alt="" class="additional-menu__icon">
                <span class="additional-menu__text">${name}</span>
            </button>
        `;
    }
}
