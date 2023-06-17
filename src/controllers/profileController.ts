import API, { ProfileApi } from '../api/profileApi.ts';
import { TChangeProfileData, TChangeProfilePass, TSearchLogin } from '../utils/types.ts';
import router from '../core/router.ts';
import { ROUTES } from '../utils/constant.ts';
import store from '../core/store.ts';

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
            throw new Error(e.message);
        }
    }

    async passwordUpdate(data: TChangeProfilePass) {
        try {
            await this.api.updatePassword(data);

            router.go(ROUTES.Profile);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async avatarUpdate(data: FormData) {
        try {
            const user = await this.api.updateAvatar(data);

            store.set('user', user);

            router.go(ROUTES.Profile);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async searchLogin(data: TSearchLogin) {
        try {
            const user = await this.api.searchUser(data);

            store.set('userSearch', user);
        } catch (e) {
            throw new Error(e.message);
        }
    }
}

export default new ProfileController();
