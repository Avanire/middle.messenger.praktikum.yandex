import Chat from '../../components/chat/chat.ts';
import regNestedComponent from '../../core/regNestedComponent.ts';
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
import ChatList from '../../components/chat-list/chat-list.ts';
import Link from '../../components/link/link.ts';
import EmptyConversation from '../../components/conversation/empty-conversation/empty-conversation.ts';
import AttachedFile from '../../components/conversation/attached-file/attached-file.ts';

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
regNestedComponent('ChatList', ChatList);
regNestedComponent('AddChatBtn', Button);
regNestedComponent('AddUserBtn', Button);
regNestedComponent('AddChatAvatar', Button);
regNestedComponent('DeleteUserBtn', Button);
regNestedComponent('DeleteChat', Button);
regNestedComponent('OpenModalBtn', ArrowButton);
regNestedComponent('OpenFileModal', ArrowButton);
regNestedComponent('ProfileLink', Link);
regNestedComponent('EmptyConversation', EmptyConversation);
regNestedComponent('AttachedFile', AttachedFile);

const ChatPage = new Chat({});

export default ChatPage;
