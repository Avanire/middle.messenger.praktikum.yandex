import Chat from '../../components/chat/chat.ts';
import renderDOM from '../../utils/renderDOM.ts';
import regNestedComponent from '../../utils/regNestedComponent.ts';
import PersonChat from '../../components/person-chat/person-chat.ts';
import Conversation from '../../components/conversation/conversation.ts';
import ConversationHeader from '../../components/conversation/conversation-header/conversation-header.ts';
import ButtonConversation from '../../components/conversation/ui/button/button.ts';
import ConversationFooter from '../../components/conversation/conversation-footer/conversation-footer.ts';
import ArrowButton from '../../components/arrow-button/arrow-button.ts';
import ModalAddUser from '../../components/modal-add-user/modal-add-user.ts';
import AddUserForm from '../../components/add-user-form/add-user-form.ts';
import InputWrapper from '../../components/input-wrapper/input-wrapper.ts';
import Input from '../../components/input/input.ts';
import Button from '../../components/button/button.ts';
import DeleteUserForm from '../../components/delete-user-form/delete-user-form.ts';
import ModalDeleteUser from '../../components/modal-delete-user/modal-delete-user.ts';

regNestedComponent('PersonChat', PersonChat);
regNestedComponent('Conversation', Conversation);
regNestedComponent('ConversationHeader', ConversationHeader);
regNestedComponent('Button', ButtonConversation);
regNestedComponent('ConversationFooter', ConversationFooter);
regNestedComponent('ArrowButton', ArrowButton);
regNestedComponent('ModalAddUser', ModalAddUser);
regNestedComponent('AddUserForm', AddUserForm);
regNestedComponent('InputWrapper', InputWrapper);
regNestedComponent('Input', Input);
regNestedComponent('ButtonModal', Button);
regNestedComponent('ModalDeleteUser', ModalDeleteUser);
regNestedComponent('DeleteUserForm', DeleteUserForm);

const chat = new Chat({});

renderDOM('root', chat);

document.addEventListener('DOMContentLoaded', () => {
    const attachFile = document.querySelector('.conversation-footer__attach-wrapper');
    attachFile?.addEventListener('click', () => {
        attachFile.classList.toggle('conversation-footer__attach-wrapper--active');
        attachFile.querySelector('.attach-menu')?.classList.toggle('attach-menu--active');
    });

    const additionalMenu = document.querySelector('.conversation-header__additional-menu-wrapper');
    additionalMenu?.addEventListener('click', () => {
        additionalMenu.classList.toggle('conversation-header__additional-menu-wrapper--active');
        additionalMenu.querySelector('.conversation-header__additional-menu')?.classList.toggle('additional-menu--active');
    });

    const addUserBtn = document.querySelector('#addUser');
    const addUserModal = document.querySelector('#modalAddUser');

    addUserBtn?.addEventListener('click', () => {
        additionalMenu?.classList.remove('conversation-header__additional-menu-wrapper--active');
        document.querySelector('.overlay')?.classList.add('overlay--active');
        addUserModal?.classList.add('modal--active');
    });

    const removeUserBtn = document.querySelector('#removeUser');
    const removeUserModal = document.querySelector('#modalDeleteUser');

    removeUserBtn?.addEventListener('click', () => {
        additionalMenu?.classList.remove('conversation-header__additional-menu-wrapper--active');
        document.querySelector('.overlay')?.classList.add('overlay--active');
        removeUserModal?.classList.add('modal--active');
    });

    const overlay = document.querySelector('.overlay');
    overlay?.addEventListener('click', () => {
        additionalMenu?.classList.remove('conversation-header__additional-menu-wrapper--active');
        overlay.classList.remove('overlay--active');
        document.querySelector('.modal--active')?.classList.remove('modal--active');
    });
});
