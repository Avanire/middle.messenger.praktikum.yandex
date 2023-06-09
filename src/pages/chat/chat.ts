import Chat from '../../components/chat/chat';
import regNestedComponent from '../../core/regNestedComponent';
import PersonChat from '../../components/person-chat/person-chat';
import Conversation from '../../components/conversation/conversation';
import ConversationHeader from '../../components/conversation/conversation-header/conversation-header';
import ButtonConversation from '../../components/conversation/ui/button/button';
import ConversationFooter from '../../components/conversation/conversation-footer/conversation-footer';
import ArrowButton from '../../components/arrow-button/arrow-button';
import ModalAddUser from '../../components/modal-add-user/modal-add-user';
import AddUserForm from '../../components/add-user-form/add-user-form';
import InputWrapper from '../../components/input-wrapper/input-wrapper';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import DeleteUserForm from '../../components/delete-user-form/delete-user-form';
import ModalDeleteUser from '../../components/modal-delete-user/modal-delete-user';
import ChatList from '../../components/chat-list/chat-list';
import Link from '../../components/link/link';
import EmptyConversation from '../../components/conversation/empty-conversation/empty-conversation';
import AttachedFile from '../../components/conversation/attached-file/attached-file';
import ModalAddChatAvatar from '../../components/modal-add-chat-avatar/modal-add-chat-avatar';
import UploadChatAvatarForm
    from '../../components/upload-chat-avatar-form/upload-chat-avatar-form';

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
regNestedComponent('ModalAddChatAvatar', ModalAddChatAvatar);
regNestedComponent('UploadChatAvatarForm', UploadChatAvatarForm);
regNestedComponent('SubmitAddAvatar', Button);

const ChatPage = new Chat({});

export default ChatPage;
