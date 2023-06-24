import Block from '../../core/block/block';
import { TInputWrapperProps } from './type';

export default class InputWrapper extends Block {
    constructor(props: TInputWrapperProps) {
        super({
            ...props,
        });
    }

    render(): string {
        const {
            id, title, type, value, name, pattern, placeholder, required,
        } = this.props;

        return `
            <div class="input-field">
                <label for="${id}" class="input-field__label">
                    ${title}
                    {{{ Input type="${type}" 
                              value="${value || ''}" 
                              id="${id}"                              
                              name="${name}" 
                              pattern="${pattern}" 
                              placeholder="${placeholder || ''}" 
                              required="${!!required}" 
                    }}}
                    <span class="input-field__error">Не верный формат</span>
                </label>
            </div>
        `;
    }
}
