import Block from '../../utils/block.ts';
import { NAME_REGEXP } from '../../utils/constant.ts';

export default class AddUserForm extends Block {
    constructor(props) {
        super({
            ...props,
            events: {
                submit: (e) => {
                    e.preventDefault();

                    const formData = new FormData(e.target);

                    // eslint-disable-next-line no-console
                    console.log(formData);
                },
            },
        });
    }

    render(): string {
        return `
            <form action="" class="add-user-form">                
                {{{ InputWrapper id='add-user' title='Логин' type='text' name='add-user' pattern='${NAME_REGEXP}' }}}                
                {{{ ButtonModal id='add_user-btn' mixin='btn--prime' name='Добавить' type='submit' }}}
            </form>
        `;
    }
}
