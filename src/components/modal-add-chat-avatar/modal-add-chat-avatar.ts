import Block from '../../core/block/block.ts';
import { TProps } from '../../utils/types.ts';

export default class ModalAddChatAvatar extends Block {
    constructor(props: TProps) {
        super(props);
    }

    render(): string {
        return `
            <section class="modal" id="modalAddChatAvatar">
                <div class="modal__title">Добавить аватар</div>
                {{{ UploadChatAvatarForm }}}
            </section>
        `;
    }
}
