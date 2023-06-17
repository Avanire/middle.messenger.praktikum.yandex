import Block from '../../core/block/block.ts';
import { TProps, TSearchLogin, TUser } from '../../utils/types.ts';
import { convertFormDataToObject } from '../../utils/utils.ts';
import ProfileController from '../../controllers/profileController.ts';
import store from '../../core/store.ts';
import ChatController from '../../controllers/chatController.ts';
import { LOGIN_REGEXP } from '../../utils/constant.ts';

export default class DeleteUserForm extends Block {
    constructor(props: TProps) {
        super({
            ...props,
            events: {
                submit: async (e: Event) => {
                    e.preventDefault();

                    const formData = new FormData(e.target as HTMLFormElement);

                    const data = convertFormDataToObject(formData) as TSearchLogin;

                    await ProfileController.searchLogin(data);

                    const chatId = store.getState().currentChatId as number;
                    const users = store.getState().userSearch as Array<TUser>;

                    const user = users.find((item) => item.login === data.login);

                    if (user) {
                        ChatController.deleteUser({
                            users: [user.id],
                            chatId,
                        }).then(() => {
                            document.querySelector('.overlay')?.classList.remove('overlay--active');
                            alert('Пользователь удален');
                        }).catch(() => {
                            alert('Произошла ошибка попробуйте еще раз');
                        });
                    }
                },
            },
        });
    }

    render(): string {
        return `
            <form action="" class="delete-user-form">                
                {{{ InputWrapper id='delete-user' title='Логин' type='text' name='login' pattern='${LOGIN_REGEXP}' }}}                
                {{{ ButtonModal id='delete-user-btn' mixin='btn--prime' name='Удалить' type='submit' }}}
            </form>
        `;
    }
}
