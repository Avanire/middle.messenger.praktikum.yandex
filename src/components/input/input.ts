import Block from '../../core/block/block';
import { TInput } from './type';
import validate from '../../utils/validation';

export default class Input extends Block {
    constructor(props: TInput) {
        super({
            ...props,
            events: {
                focus: (e: MouseEvent) => {
                    const inputTarget = e.target as HTMLInputElement;
                    validate(inputTarget, inputTarget.pattern);
                },
                blur: (e: MouseEvent) => {
                    const inputTarget: HTMLInputElement = e.target as HTMLInputElement;
                    validate(inputTarget, inputTarget.pattern);
                },
            },
        });
    }

    render(): string {
        const {
            id, type, value, name, pattern, placeholder, required,
        } = this.props;

        return `
            <input
                type="${type}"
                value="${value || ''}"
                id="${id}"
                class="input"
                name="${name}"
                ${pattern ? `pattern="${pattern}"` : null}
                placeholder="${placeholder || ''}"
                required="${!!required}"                        
            >
        `;
    }
}
