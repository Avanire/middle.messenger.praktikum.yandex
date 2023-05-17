import Block from '../../utils/block.ts';
import statusIcon from '../../images/message-delivered-icon.svg';
import { TMessage } from './type.ts';
import exampleImage from '../../images/example-img-message.png';
import { TProps } from '../../utils/types.ts';

export default class Conversation extends Block {
    name: string;

    date: string;

    messages: Array<TMessage>;

    constructor(props: TProps) {
        super(props);
    }

    render(): string {
        this.name = 'Володя';
        this.date = '19 Июня';
        this.messages = [
            {
                text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — '
                    + 'НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.',
                delivered: false,
                datetime: '11:56',
                owner: false,
            },
            {
                image: exampleImage,
                delivered: false,
                datetime: '11:56',
                owner: false,
            },
            {
                text: 'Очень интересно',
                delivered: true,
                datetime: '12:10',
                owner: true,
            },
        ];

        return `
            <section class="conversation">
                {{{ ConversationHeader name='${this.name}' }}}
                <div class="conversation__chat chat">
                    <div class="chat__date">${this.date}</div>
                    <div class="chat__messages">
                        ${this.messages.map((message) => `
                            <div class="chat__message chat-message ${message.owner ? 'chat__message--answer' : ''} ${message.image ? 'chat__message--image' : ''}">
                                <div class="chat-message__text">
                                    ${message.text ? message.text : `<img src="${message.image}" alt="" />`}
                                </div>
                                <div class="chat-message__info">
                                    <span class="chat-message__status">${message.delivered ? `<img src="${statusIcon}" alt="" />` : ''}</span>
                                    <span class="chat-message__time">${message.datetime}</span>
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
