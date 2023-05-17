export type TEventHandler = (...payload) => void

export type TListeners = {
    [key: string]: Array<TEventHandler>,
}

type TEventType = keyof HTMLElementEventMap;

export type TGeneralProps = {
    __id?: string,
    events?: {
        [key in TEventType]?: (e: HTMLElementEventMap[TEventType]) => void
    }
}

export type TProps = {
    [key: string]: unknown
}

export type TOptions = {
    method: string,
    timeout?: number,
    headers?: Record<string, string>,
    data?: unknown
}

export type TOptionsWithoutMethod = Omit<TOptions, 'method'>;
