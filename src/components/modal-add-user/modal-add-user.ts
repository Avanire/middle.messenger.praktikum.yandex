import Block from '../../utils/block.ts';

export default class ModalAddUser extends Block {
    constructor(props) {
        super(props);
    }

    render(): string {
        return `
            <section class="modal" id="modalAddUser">
                <div class="modal__title">Добавить пользователя</div>
                {{{ AddUserForm }}}
            </section>
        `;
    }
}
