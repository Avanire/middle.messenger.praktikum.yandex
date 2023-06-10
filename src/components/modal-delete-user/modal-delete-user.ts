import Block from '../../utils/block.ts';
import { TProps } from '../../utils/types.ts';

export default class ModalDeleteUser extends Block {
    constructor(props: TProps) {
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
