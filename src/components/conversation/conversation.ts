import Block from '../../core/block/block.ts';
import statusIcon from '../../images/message-delivered-icon.svg';
import {
    TChatList, TMessage, TProps, TUser,
} from '../../utils/types.ts';
import withStore from '../../hocs/withStore.ts';
import { API_URL } from '../../utils/constant.ts';

class Conversation extends Block {
    constructor(props: TProps) {
        super(props);
    }

    render(): string {
        const chatList = this.props.chatList as Array<TChatList>;
        const { currentChatId } = this.props;
        const chat = chatList.find((item) => item.id === +(currentChatId as number));
        const messages = this.props?.messages as Array<TMessage>;
        const currentUser = this.props?.user as TUser;

        return `
            <section class="conversation">
                {{{ ConversationHeader title='${chat?.title}' avatar=${chat?.avatar} }}}
                <div class="conversation__chat chat">
                    <div class="chat__date"></div>
                    <div class="chat__messages">
                        ${messages && messages.map((message) => `
                            <div class="chat__message chat-message ${message.user_id === currentUser.id
        ? 'chat__message--answer' : ''} ${message.file ? 'chat__message--image'
    : ''}">
                                <div class="chat-message__text">
                                    ${message.file ? `<img src="${API_URL}/resources/${message.file.path}" alt="" class="chat-message__image" />` : message.content}
                                </div>
                                <div class="chat-message__info">
                                    <span class="chat-message__status">
                                        ${message.is_read ? `<img src="${statusIcon}" alt="" />` : ''}
                                    </span>
                                    <span class="chat-message__time">
                                        ${new Date(message.time).toLocaleTimeString()}
                                    </span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                {{{ ConversationFooter }}}
            </section>
        `;
    }
}

const whitChats = withStore((state) => ({ ...state }));

export default whitChats(Conversation);
