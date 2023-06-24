import API, { ProfileApi } from '../api/profileApi';
import { TChangeProfileData, TChangeProfilePass, TSearchLogin } from '../utils/types';
import router from '../core/router';
import { ROUTES } from '../utils/constant';
import store from '../core/store';

class ProfileController {
    private api: ProfileApi;

    constructor() {
        this.api = API;
    }

    async profileUpdate(data: TChangeProfileData) {
        try {
            const user = await this.api.updateProfile(data);

            store.set('user', user);

            router.go(ROUTES.Profile);
        } catch (e) {
            console.error(e.reason);
        }
    }

    async passwordUpdate(data: TChangeProfilePass) {
        try {
            await this.api.updatePassword(data);

            router.go(ROUTES.Profile);
        } catch (e) {
            console.error(e.reason);
        }
    }

    async avatarUpdate(data: FormData) {
        try {
            const user = await this.api.updateAvatar(data);

            store.set('user', user);

            router.go(ROUTES.Profile);
        } catch (e) {
            console.error(e.reason);
        }
    }

    async searchLogin(data: TSearchLogin) {
        try {
            const user = await this.api.searchUser(data);

            store.set('userSearch', user);
        } catch (e) {
            console.error(e.reason);
        }
    }
}

export default new ProfileController();
