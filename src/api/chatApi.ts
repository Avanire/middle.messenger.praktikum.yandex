import BaseApi from './baseApi.ts';
import { TAddUserData, TCreateChatData, TDataDeleteChat } from '../utils/types.ts';

export class ChatApi extends BaseApi {
    constructor() {
        super('/chats');
    }

    getChats = () => this.http.get('');

    create = (data: TCreateChatData) => this.http.post('', {
        headers: {
            'Content-Type': 'application/json',
        },
        data,
    });

    addUser = (data: TAddUserData) => this.http.put('/users', {
        headers: {
            'Content-Type': 'application/json',
        },
        data,
    });

    deleteUser = (data: TAddUserData) => this.http.delete('/users', {
        headers: {
            'Content-Type': 'application/json',
        },
        data,
    });

    deleteChat = (data: TDataDeleteChat) => this.http.delete('', {
        headers: {
            'Content-Type': 'application/json',
        },
        data,
    });

    getChatToken = (data: string) => this.http.post(`/token/${data}`);

    getChatUsers = (id: string) => this.http.get(`/${id}/users`);

    getChatInfo = (id: string) => this.http.get(`/${id}/common`);
}

export default new ChatApi();
