import BaseApi from './baseApi.ts';
import { TChangeProfileData, TChangeProfilePass, TSearchLogin } from '../utils/types.ts';

export class ProfileApi extends BaseApi {
    constructor() {
        super('/user');
    }

    updateProfile = (data: TChangeProfileData) => this.http.put('/profile', {
        headers: {
            'Content-Type': 'application/json',
        },
        data,
    });

    updatePassword = (data: TChangeProfilePass) => this.http.put('/password', {
        headers: {
            'Content-Type': 'application/json',
        },
        data,
    });

    updateAvatar = (data: FormData) => this.http.put('/profile/avatar', {
        data,
    });

    getUser = (id: string) => this.http.get(`/${id}`);

    searchUser = (data: TSearchLogin) => this.http.post('/search', {
        headers: {
            'Content-Type': 'application/json',
        },
        data,
    });
}

export default new ProfileApi();
