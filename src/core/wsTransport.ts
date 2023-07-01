import { SOCKET_LISTENERS, WS_URL } from '../utils/constant';
import { TSocketData } from '../utils/types';
import store from './store';

class WsTransport {
    private userId: number;

    private chatId: number;

    private token: string;

    private socket: WebSocket;

    private ping: any;

    constructor(userId: number, chatId: number, token: string) {
        this.userId = userId;
        this.chatId = chatId;
        this.token = token;
    }

    private closeConnection(e: CloseEvent) {
        this.removeListeners();

        if (!e.wasClean) {
            throw new Error(`Код: ${e.code} | Причина: ${e.reason}`);
        }
    }

    private openConnection() {
        this.getOldMessages();

        this.ping = setInterval(() => {
            this.socket.send(JSON.stringify({ type: 'ping' }));
        }, 10000);
    }

    getOldMessages(page = '0') {
        this.socket.send(JSON.stringify({ content: page, type: 'get old' }));
    }

    private messagesListener(e: MessageEvent) {
        try {
            const data = JSON.parse(e.data) as TSocketData;

            if (data.type !== 'pong' && data.type !== 'user connected') {
                const { messages } = store.getState();

                if (messages) {
                    store.set('messages', [...messages, data]);
                } else {
                    store.set('messages', [...data].reverse());
                }
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    private errorConnection(e: ErrorEvent) {
        throw new Error(e.error);
    }

    sendMessage(message: {content: string | number, type: string}) {
        this.socket.send(JSON.stringify(message));
    }

    async connect() {
        this.socket = await new WebSocket(
            `${WS_URL}/${this.userId}/${this.chatId}/${this.token}`,
        );

        this.addListeners();
    }

    close() {
        this.removeListeners();
        clearInterval(this.ping);
        this.socket.close();
    }

    private addListeners() {
        this.socket.addEventListener(
            SOCKET_LISTENERS.Open,
            () => this.openConnection(),
        );
        this.socket.addEventListener(
            SOCKET_LISTENERS.Close,
            (e: CloseEvent) => this.closeConnection(e),
        );
        this.socket.addEventListener(
            SOCKET_LISTENERS.Message,
            (e: MessageEvent) => this.messagesListener(e),
        );
        this.socket.addEventListener(
            SOCKET_LISTENERS.Error,
            (e: ErrorEvent) => this.errorConnection(e),
        );
    }

    private removeListeners() {
        this.socket.removeEventListener(
            SOCKET_LISTENERS.Open,
            () => this.openConnection(),
        );
        this.socket.removeEventListener(
            SOCKET_LISTENERS.Close,
            (e: CloseEvent) => this.closeConnection(e),
        );
        this.socket.removeEventListener(
            SOCKET_LISTENERS.Message,
            (e: MessageEvent) => this.messagesListener(e),
        );
        this.socket.removeEventListener(
            SOCKET_LISTENERS.Error,
            (e: ErrorEvent) => this.errorConnection(e),
        );
    }
}

export default WsTransport;
