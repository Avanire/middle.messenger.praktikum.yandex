import Block from '../../core/block/block';
import noPhoto from '../../images/no-photo.svg';
import { TChatList } from '../../utils/types';
import dots from '../../images/dots.svg';
import ChatController from '../../controllers/chatController';
import store from '../../core/store';
import { API_URL } from '../../utils/constant';

class PersonChat extends Block {
    constructor(props: TChatList) {
        super({
            ...props,
            onOpenModal: (e: MouseEvent) => this.openModal(e),
            onAddUser: (e: MouseEvent) => this.addUser(e),
            onDeleteUser: (e: MouseEvent) => this.deleteUser(e),
            onDeleteChat: (e: MouseEvent) => this.deleteChat(e),
            onAddAvatar: (e: MouseEvent) => this.addAvatar(e),
            events: {
                click: (e: MouseEvent) => this.openConversation(e),
            },
        });
    }

    openConversation(e: MouseEvent) {
        const element = e.currentTarget as HTMLElement;
        const chatId = element.dataset.chatid;

        ChatController.openConversation(chatId as string);
    }

    openModal(e: MouseEvent) {
        const target = e.currentTarget as HTMLElement;
        const modal = target.nextElementSibling;
        modal?.classList.toggle('person-chat__additional-menu--active');
        e.stopPropagation();
    }

    closeModal() {
        const modal = document.querySelector('.person-chat__additional-menu');
        modal?.classList.remove('person-chat__additional-menu--active');
    }

    addUser(e: MouseEvent) {
        e.stopPropagation();

        store.set('currentChatId', this.props.id);

        document.querySelector('#modalAddUser')?.classList.add('modal--active');
        document.querySelector('.overlay')?.classList.add('overlay--active');

        this.closeModal();
    }

    deleteUser(e: MouseEvent) {
        e.stopPropagation();

        store.set('currentChatId', this.props.id);

        document.querySelector('#modalDeleteUser')?.classList.add('modal--active');
        document.querySelector('.overlay')?.classList.add('overlay--active');

        this.closeModal();
    }

    addAvatar(e: MouseEvent) {
        e.stopPropagation();

        store.set('currentChatId', this.props.id);

        document.querySelector('#modalAddChatAvatar')?.classList.add('modal--active');
        document.querySelector('.overlay')?.classList.add('overlay--active');

        this.closeModal();
    }

    deleteChat(e: MouseEvent) {
        e.stopPropagation();
        const id = this.props.id as number;
        ChatController.deleteChat({ chatId: id });
        this.closeModal();
    }

    render(): string {
        const {
            name, message, counter, avatar, id, userName,
        } = this.props;
        const datetime = this.props.datetime as string;
        let time = '';

        if (datetime) {
            time = (new Date(datetime) === new Date() ? new Intl.DateTimeFormat('ru', {
                hour: 'numeric',
                minute: 'numeric',
            }).format(new Date(datetime)) : new Intl.DateTimeFormat('ru', {
                day: 'numeric',
                month: 'short',
            }).format(new Date(datetime)));
        }

        return `
            <section class="person-chat" data-chatid="${id}">
                <div class="person-chat__img">
                    <img src="${avatar ? `${API_URL}/resources/${avatar}` : noPhoto}" alt="">
                </div>
                <div class="person-chat__info">
                    <div class="person-chat__row mb-1">
                        <span class="person-chat__author">${name}</span>
                        <span class="person-chat__time">${time}</span>
                    </div>
                    <div class="person-chat__row">
                        <span class="person-chat__message">${message ? `${userName}: ${message}` : ''}</span>
                        ${counter ? `<span class="person-chat__counter">${counter}</span>` : ''}
                    </div>
                </div>
                
                <div class="person-chat__additional-menu-btn">
                    {{{ OpenModalBtn 
                        id='open-modal' 
                        type='button' 
                        onClick=onOpenModal 
                        image='${dots}' 
                        mixin='modal-btn' 
                    }}}
                    <div class="person-chat__additional-menu">
                        {{{ AddUserBtn 
                            id='add-user-chat' 
                            type='button' 
                            name='Добавить пользователя' 
                            onClick=onAddUser 
                        }}}
                        {{{ DeleteUserBtn 
                            id='delete-user-chat' 
                            type='button' 
                            name='Удалить пользователя' 
                            onClick=onDeleteUser 
                        }}}
                        {{{ DeleteChat 
                            id='delete-chat' 
                            type='button' 
                            name='Удалить чат'
                            onClick=onDeleteChat
                        }}}
                        {{{ AddChatAvatar 
                            id='add-avatar' 
                            type='button' 
                            name='Добавить аватар'
                            onClick=onAddAvatar
                        }}}
                    </div>
                </div>                
            </section>
        `;
    }
}

export default PersonChat;
