import Block from '../../core/block/block';
import { TProps } from '../../utils/types';
import store from '../../core/store';
import ChatController from '../../controllers/chatController';

export default class UploadChatAvatarForm extends Block {
    constructor(props: TProps) {
        super({
            ...props,
            events: {
                submit: (e: Event) => this.submitHandler(e),
            },
        });
    }

    submitHandler(e: Event) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const chatId = store.getState().currentChatId;

        formData.append('chatId', chatId.toString());

        ChatController.addChatAvatar(formData).then(() => {
            document.querySelector('.overlay')?.classList.remove('overlay--active');
            alert('Аватар загружен');
        }).catch(() => {
            document.querySelector('.overlay')?.classList.remove('overlay--active');
            alert('Произошла ошибка попробуйте еще раз');
        });
    }

    render(): string {
        return `
            <form action="" class="add-chat-avatar" enctype="multipart/form-data">
                <input 
                        type="file" 
                        name="avatar"       
                        id="avatar"   
                        accept="image/*"
                        class="mb-6"
                    >          
                {{{ SubmitAddAvatar id='add-chat-avatar' mixin='btn--prime' name='Сохранить' type='submit' }}}
            </form>
        `;
    }
}
