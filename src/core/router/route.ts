import Block from '../block/block';
import renderDOM from '../renderDOM';

class Route {
    private _pathname: string;

    private readonly _blockClass: Block;

    private _block: null | Block;

    private _props: Record<string, string>;

    private _needAuth: boolean;

    private _onUnautorized: ((pathname: string) => void) | undefined;

    private _redirect: () => void;

    constructor(
        pathname: string,
        view: Block,
        props: Record<string, string>,
        needAuth: boolean,
        onUnautorized: (() => void) | undefined,
        redirect: () => void,
    ) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
        this._needAuth = needAuth;
        this._redirect = redirect;
        this._onUnautorized = onUnautorized;
    }

    leave = () => {
        if (this._block) {
            this._block.destroy();
        }
    };

    match = (pathname: string): boolean => pathname === this._pathname;

    checkAuth() {
        if (this._needAuth) {
            if (typeof this._onUnautorized === 'function') {
                return this._onUnautorized(this._pathname);
            }
        }
        return true;
    }

    render = () => {
        if (this.checkAuth()) {
            if (!this._block?._checkInDom()) {
                this._block = this._blockClass;
                renderDOM(this._props.rootQuery, this._block);
            }

            this._block.show();
        } else {
            this._redirect();
        }
    };
}

export default Route;
