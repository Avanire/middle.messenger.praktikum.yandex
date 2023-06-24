import { TEventHandler, TListeners } from '../utils/types';

class EventBus {
    listeners: TListeners;

    constructor() {
        this.listeners = {};
    }

    on(event: string, callback: TEventHandler): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event: string, callback: TEventHandler): void {
        if (!this.listeners[event]) {
            throw new Error(`No event ${event}`);
        }

        this.listeners[event] = this.listeners[event]
            .filter(listener => listener !== callback);
    }

    emit(event: string, ...payload: Array<unknown>): void {
        if (!this.listeners[event]) {
            throw new Error(`No event ${event}`);
        }

        this.listeners[event].forEach(listener => {
            listener(...payload);
        });
    }
}

export default EventBus;
