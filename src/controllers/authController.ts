import API, { AuthApi } from '../api/authApi.ts';
import { LoginData, SigninData } from '../utils/types.ts';
import store from '../core/store.ts';
import { ROUTES } from '../utils/constant.ts';
import Router from '../core/router.ts';

class AuthController {
    private api: AuthApi;

    constructor() {
        this.api = API;
    }

    async signup(data: SigninData) {
        try {
            await this.api.signin(data);

            await this.fetchUser();

            Router.go(ROUTES.Chat);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async login(data: LoginData) {
        try {
            await this.api.login(data);

            await this.fetchUser();

            Router.go(ROUTES.Chat);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async fetchUser() {
        try {
            const user = await this.api.getUser();

            store.set('user', user);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async logout() {
        try {
            await this.api.logout();

            Router.go(ROUTES.Index);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async checkAuth() {
        await this.fetchUser();
    }
}

export default new AuthController();
