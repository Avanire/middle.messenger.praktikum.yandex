import Route from './route.ts';
import { ROUTES } from '../utils/constant.ts';
import { TProps } from '../utils/types.ts';
import Block from './block/block.ts';

export type TRouteConstructor = {
    pathname: string,
    block: Block,
    props?: TProps,
    needAuth?: boolean,
    redirectPath?: string,
    onUnautorized?: () => void
}

class Router {
    private static __instance: Router;

    private routes: Array<Route>;

    private history: History;

    private _currentRoute: null | Route;

    private readonly _rootQuery: string;

    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    use = ({
        pathname, block, onUnautorized, redirectPath = '/', needAuth = false,
    }: TRouteConstructor) => {
        const redirect = () => this.go(redirectPath);
        const route = new Route(
            pathname,
            block,
            { rootQuery: this._rootQuery },
            needAuth,
            onUnautorized,
            redirect,
        );
        this.routes.push(route);

        return this;
    };

    start = () => {
        window.onpopstate = (event: PopStateEvent) => {
            const target = event.currentTarget as Window;
            this._onRoute(target.location.pathname);
        };

        this._onRoute(window.location.pathname);
    };

    _onRoute = (pathname: string) => {
        const route = this.getRoute(pathname);

        if (route) {
            if (this._currentRoute && this._currentRoute !== route) {
                this._currentRoute.leave();
            }

            this._currentRoute = route;
            route.render();
        } else {
            this.go(ROUTES.Page404);
        }
    };

    go(pathname: string) {
        this.history.pushState({}, '', pathname);

        this._onRoute(pathname);
    }

    back = () => {
        this.history.back();
    };

    forward = () => {
        this.history.forward();
    };

    getRoute = (pathname: string) => this.routes.find((route) => route.match(pathname));
}

export default new Router('root');
