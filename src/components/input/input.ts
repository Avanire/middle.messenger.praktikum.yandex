import Block from '../../utils/block.ts';
import { TInput } from './type.ts';
import validate from '../../utils/validation.ts';

export default class Input extends Block {
    constructor(props: TInput) {
        super({
            ...props,
            events: {
                focus: (e) => validate(e.target, e.target.attributes.pattern.value),
                blur: (e) => validate(e.target, e.target.attributes.pattern.value),
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
