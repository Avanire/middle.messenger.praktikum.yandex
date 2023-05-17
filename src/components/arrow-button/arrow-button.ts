import Block from '../../utils/block.ts';
import { TArrowButton } from './type.ts';

export default class ArrowButton extends Block {
    constructor(props: TArrowButton) {
        super(props);
    }

    render(): string {
        const { id, type, prev } = this.props;

        return `
            <button class="arrow-button" id="${id}" type="${type}">
                <svg class="arrow-button__arrow ${prev && 'arrow-button__arrow--prev'}" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="5.19995" width="11" height="1.6" fill="white"/>
                    <path d="M7 1L11 6L7 11" stroke="white" stroke-width="1.6"/>
                </svg>
            </button>
        `;
    }
}
