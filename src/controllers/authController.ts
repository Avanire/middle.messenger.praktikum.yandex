import API, { AuthApi } from '../api/authApi';
import { LoginData, SigninData } from '../utils/types';
import store from '../core/store';
import { ROUTES } from '../utils/constant';
import Router from '../core/router/router';

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
            console.error(e.reason);
        }
    }

    async login(data: LoginData) {
        try {
            await this.api.login(data);

            await this.fetchUser();

            Router.go(ROUTES.Chat);
        } catch (e) {
            if (e.reason === 'User already in system') {
                Router.go(ROUTES.Chat);
            }
        }
    }

    async fetchUser() {
        try {
            const user = await this.api.getUser();

            store.set('user', user);
        } catch (e) {
            console.error(e.reason);
        }
    }

    async logout() {
        try {
            await this.api.logout();

            Router.go(ROUTES.Index);
        } catch (e) {
            console.error(e.reason);
        }
    }

    async checkAuth() {
        await this.fetchUser();
    }
}

export default new AuthController();
