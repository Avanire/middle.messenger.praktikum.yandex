import Block from '../../utils/block.ts';
import { TProps } from '../../utils/types.ts';

export default class ModalAddUser extends Block {
    constructor(props: TProps) {
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
