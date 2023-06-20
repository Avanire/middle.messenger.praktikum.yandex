import BaseApi from './baseApi.ts';
import { LoginData, SigninData } from '../utils/types.ts';

export class AuthApi extends BaseApi {
    constructor() {
        super('/auth');
    }

    login = (data: LoginData) => this.http.post('/signin', {
        headers: {
            'Content-Type': 'application/json',
        },
        data,
    });

    signin = (data: SigninData) => this.http.post('/signup', {
        headers: {
            'Content-Type': 'application/json',
        },
        data,
    });

    getUser = () => this.http.get('/user');

    logout = () => this.http.post('/logout');
}

export default new AuthApi();
