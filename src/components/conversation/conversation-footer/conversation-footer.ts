import Block from '../../../core/block/block';
import { MESSAGE_REGEXP } from '../../../utils/constant';
import { TProps } from '../../../utils/types';
import arrowRight from '../../../images/arrow-right.svg';
import { convertFormDataToObject } from '../../../utils/utils';
import ChatController from '../../../controllers/chatController';
import store from '../../../core/store';

export default class ConversationFooter extends Block {
    constructor(props: TProps) {
        super({
            ...props,
            onChange: (e: Event) => this.handleAttachedFile(e),
            events: {
                submit: (e: Event) => {
                    e.preventDefault();

                    const formData = new FormData(e.target as HTMLFormElement);
                    const message = convertFormDataToObject(formData) as {message: string};

                    ChatController.sendMessage({ content: message.message, type: 'message' });
                },
            },
        });
    }

    async handleAttachedFile(e: Event) {
        document.querySelector('.attach-menu')?.classList.remove('attach-menu--active');

        const formData = new FormData();
        const input = e.target as HTMLInputElement;
        const file = input.files && input.files[0];

        if (file) {
            formData.append('resource', file);

            ChatController.uploadFileToChat(formData).then(() => {
                const { uploadFile } = store.getState();

                if (uploadFile) {
                    ChatController.sendMessage({ content: uploadFile.id, type: 'file' });
                }
            });
        }
    }

    render(): string {
        return `
            <form action="" class="conversation__footer conversation-footer" enctype="multipart/form-data">      
                {{{ AttachedFile onChange=onChange }}}
                <input type="text" name="message" id="message" placeholder="Сообщение" class="conversation-footer__message-to-send" pattern="${MESSAGE_REGEXP}" required>            
                {{{ ArrowButton id='conversation-footer__submit' type='submit' image='${arrowRight}' mixin='main-color' }}}
            </form>
        `;
    }
}
