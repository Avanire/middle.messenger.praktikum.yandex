import Block from '../../utils/block.ts';
import { TFormWrapper } from './type.ts';

export default class FormWrapper extends Block {
    constructor(props: TFormWrapper) {
        super(props);
    }

    render(): string {
        return `
            <section class="form-wrapper container">
                <div class="form-wrapper__inner">
                    <h1 class="form-wrapper__title mb-10">{{{ name }}}</h1>
                    {{{ Form }}}
                </div>
            </section>
        `;
    }
}
