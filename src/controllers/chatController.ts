import API, { ChatApi } from '../api/chatApi';
import {
    TAddUserData, TCreateChatData, TDataDeleteChat, TSendMessage,
} from '../utils/types';
import store from '../core/store';
import WsTransport from '../core/wsTransport';
import ResourcesApi from '../api/resourcesApi';

class ChatController {
    private api: ChatApi;

    private socket: WsTransport | null = null;

    constructor() {
        this.api = API;
    }

    async getChats() {
        try {
            const list = await this.api.getChats();

            store.set('chatList', list);
        } catch (e) {
            console.error(e.reason);
        }
    }

    async createChat(data: TCreateChatData) {
        try {
            await this.api.create(data);

            await this.getChats();
        } catch (e) {
            console.error(e.reason);
        }
    }

    async addUser(data: TAddUserData) {
        try {
            await this.api.addUser(data);
        } catch (e) {
            console.error(e.reason);
        }
    }

    async deleteUser(data: TAddUserData) {
        try {
            await this.api.deleteUser(data);

            await this.getChats();
        } catch (e) {
            console.error(e.reason);
        }
    }

    async deleteChat(data: TDataDeleteChat) {
        try {
            await this.api.deleteChat(data);

            await this.getChats();
        } catch (e) {
            console.error(e.reason);
        }
    }

    async addChatAvatar(data: FormData) {
        try {
            await this.api.addAvatar(data);

            await this.getChats();
        } catch (e) {
            console.error(e.reason);
        }
    }

    async getToken(chatId: string) {
        try {
            const token = await this.api.getChatToken(chatId);

            store.set('currentChatId', chatId);
            store.set('token', token);
        } catch (e) {
            console.error(e.reason);
        }
    }

    async openConversation(chatId: string) {
        await this.getToken(chatId);

        const userId = store.getState().user.id;
        const { currentChatId, token } = store.getState();

        if (this.socket) {
            store.set('messages', '');
            this.socket.close();
        }

        if (token?.token) {
            this.socket = new WsTransport(userId, currentChatId, token.token);

            this.socket.connect();
        }
    }

    async uploadFileToChat(formData: FormData) {
        try {
            const uploadedFile = await ResourcesApi.create(formData);

            store.set('uploadFile', uploadedFile);
        } catch (e) {
            console.error(e.reason);
        }
    }

    sendMessage(message: TSendMessage) {
        this.socket?.sendMessage(message);
    }
}

export default new ChatController();
