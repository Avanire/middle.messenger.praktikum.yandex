import Block from '../../utils/block.ts';

export default class DeleteUserForm extends Block {
    constructor(props) {
        super(props);
    }

    render(): string {
        return `
            <form action="" class="delete-user-form">                
                {{{ InputWrapper id='delete-user' title='Логин' type='text' name='delete-user' }}}                
                {{{ ButtonModal id='delete-user-btn' mixin='btn--prime' name='Удалить' type='submit' }}}
            </form>
        `;
    }
}
