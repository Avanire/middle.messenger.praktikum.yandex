import Block from '../../core/block/block';
import { convertFormDataToObject } from '../../utils/utils';
import ChatController from '../../controllers/chatController';
import { TChatList, TCreateChatData, TUser } from '../../utils/types';
import withStore from '../../hocs/withStore';

class ChatList extends Block {
    constructor(props: TChatList) {
        super({
            ...props,
            events: {
                submit: (e: FormDataEvent) => this.submitHandler(e),
            },
        });

        ChatController.getChats();
    }

    submitHandler(e: Event) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        const data = convertFormDataToObject(formData);

        ChatController.createChat(data as TCreateChatData);
    }

    render(): string {
        const chatList = this.props.chatList as Array<TChatList>;
        const user = this.props.user as TUser;

        return `
           <section class="chat-list">
               <label for="chat-search">
                    <input 
                        type="text" 
                        name="chat-search" 
                        id="chat-search" 
                        placeholder="Поиск" 
                        class="chat-list__search-input mb-4"
                    >
                </label>
                <form action="" class="chat-list__add-chat-form mb-4">
                    <label for="add-new-chat" class="chat-list__input-label">Добавить новый чат</label>
                    <input 
                        type="text" 
                        class="chat-list__input" 
                        id="add-new-chat" 
                        name="title" 
                        required
                    >
                    {{{ AddChatBtn
                        id='add-chat-btn' 
                        mixin='btn--prime' 
                        name='Добавить' 
                        type='submit' 
                     }}}
               </form>
                <div class="chat-list__list">
                    ${chatList ? chatList.map((chat: TChatList) => `                        
                        {{{ PersonChat 
                            name='${chat.title}' 
                            datetime='${chat.last_message?.time ?? ''}' 
                            message='${chat.last_message?.content ?? ''}' 
                            counter='${chat.unread_count ? chat.unread_count : ''}'
                            avatar='${chat.avatar ?? ''}'
                            id='${chat.id}'
                            userName='${user.login === chat.last_message?.user.login ? 'Вы' : chat.last_message?.user.first_name}'                 
                        }}}
                        `).join('') : ''}                       
                </div>
            </section>
        `;
    }
}

const whitChats = withStore(state => ({ ...state }));

export default whitChats(ChatList);
