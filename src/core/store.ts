import EventBus from './eventBus.ts';
import { set } from '../utils/utils.ts';
import { Indexed, StoreEvents, TStore } from '../utils/types.ts';

class Store extends EventBus {
    private state: Indexed = {};

    set = (pathname: keyof TStore, data: unknown) => {
        set(this.state, pathname, data);
        this.emit(StoreEvents.Updated, this.getState());
    };

    getState = () => this.state;
}

export default new Store();
