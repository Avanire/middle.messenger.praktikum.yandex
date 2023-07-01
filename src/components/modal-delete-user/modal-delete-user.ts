import Block from '../../core/block/block';
import { TProps } from '../../utils/types';

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
