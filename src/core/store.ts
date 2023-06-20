import EventBus from './eventBus.ts';
import { set } from '../utils/utils.ts';
import { StoreEvents, TStore } from '../utils/types.ts';

const defaultStore: TStore = {
    user: {
        id: 0,
        first_name: '',
        second_name: '',
        display_name: '',
        login: '',
        email: '',
        phone: '',
        avatar: '',
    },
    chatList: [],
    currentChatId: 0,
    token: null,
    messages: null,
    userSearch: [],
    uploadFile: null,
};

class Store extends EventBus {
    private state: TStore = defaultStore;

    set = (pathname: keyof TStore, data: unknown) => {
        set(this.state, pathname, data);
        this.emit(StoreEvents.Updated, this.getState());
    };

    getState = () => this.state;
}

export default new Store();
