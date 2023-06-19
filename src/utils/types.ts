export type TEventHandler = (...payload: Array<unknown>) => void

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

export type HTTPMethod = (url: string, options?: TOptionsWithoutMethod) => Promise<XMLHttpRequest>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StringIndexed = Record<string, any>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PlainObject<T = any> = {
    [k in string]: T;
};

export type FormRequest = (
    formData: FormData,
    endpoint: string
) => Promise<XMLHttpRequest>

export type Indexed<T = unknown> = {
    [key in string]: T;
};

export enum StoreEvents {
    Updated = 'updated',
}

export type LoginData = {
    login: string,
    password: string
}

export type SigninData = {
    first_name: string,
    second_name: string,
    login: string,
    email: string,
    password: string,
    phone: string
}

export type TUser = {
    id: number,
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string,
    avatar: string
}

export type TChatList = {
    id: number,
    avatar?: string | null,
    last_message?: {
        user: TUser,
        content: string,
        id: number,
        time: string
    },
    title: string,
    unread_count: number,
    onClick: () => void,
    userName: string
}

export type TStore = {
    user: TUser,
    chatList: Array<TChatList>
    currentChatId: number,
    token: TToken | null,
    messages: Array<TMessage> | null,
    userSearch: Array<TUser>,
    uploadFile: TFile | null
}

export type TToken = {
    token: string
}

export type TChangeProfileData = {
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string
}

export type TAddUserData = {
    users: Array<number>,
    chatId: number
}

export type TChangeProfilePass = {
    oldPassword: string,
    newPassword: string
}

export type TCreateChatData = {
    title: string
}

export type TSendMessage = {
    content: string | number,
    type: string
}

export type TMessage = {
    id: number,
    user_id: number,
    chat_id: number,
    type: string,
    time: string,
    content: string,
    is_read: boolean,
    file: TFile | null
}

export type TSocketData = {
    type?: string
} & Array<TMessage>

export type TFile = {
    content: string,
    id: number,
    path: string
}

export type TDataDeleteChat = {
    chatId: number
}

export type TSearchLogin = {
    login: string
}
