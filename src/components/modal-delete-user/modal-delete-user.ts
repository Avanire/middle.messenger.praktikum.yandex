import Block from '../../utils/block.ts';

export default class ModalDeleteUser extends Block {
    constructor(props) {
        super(props);
    }

    render(): string {
        return `
            <section class="modal" id="modalDeleteUser">
                <div class="modal__title">Удалить пользователя</div>
                {{{ DeleteUserForm }}}
            </section>
        `;
    }
}
