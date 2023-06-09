import './styles/index.pcss';
import Router from './core/router/router';
import { ROUTES } from './utils/constant';
import LoginPage from './pages/login/login';
import SignupPage from './pages/signup/signup';
import ProfilePage from './pages/profile/profile';
import ProfileChangePassPage from './pages/profile/profile-change-pass/profile-change-pass';
import ProfileEditPage from './pages/profile/profile-edit/profile-edit';
import Page404 from './pages/404/404';
import ChatPage from './pages/chat/chat';
import AuthController from './controllers/authController';
import store from './core/store';
import Page5xx from './pages/5xx/5xx';

AuthController.checkAuth().then(() => {
    Router
        .use({
            pathname: ROUTES.Index,
            block: LoginPage,
        })
        .use({
            pathname: ROUTES.Signup,
            block: SignupPage,
        })
        .use({
            pathname: ROUTES.Profile,
            block: ProfilePage,
            needAuth: true,
            onUnautorized: () => Boolean(store.getState().user),
        })
        .use({
            pathname: ROUTES.ChangePass,
            block: ProfileChangePassPage,
            needAuth: true,
            onUnautorized: () => Boolean(store.getState().user),
        })
        .use({
            pathname: ROUTES.Edit,
            block: ProfileEditPage,
            needAuth: true,
            onUnautorized: () => Boolean(store.getState().user),
        })
        .use({
            pathname: ROUTES.Chat,
            block: ChatPage,
            needAuth: true,
            onUnautorized: () => Boolean(store.getState().user),
        })
        .use({
            pathname: ROUTES.Page404,
            block: Page404,
        })
        .use({
            pathname: ROUTES.Page500,
            block: Page5xx,
        })
        .start();
}).catch(() => {
    Router
        .use({
            pathname: ROUTES.Index,
            block: LoginPage,
        })
        .use({
            pathname: ROUTES.Signup,
            block: SignupPage,
        })
        .use({
            pathname: ROUTES.Profile,
            block: ProfilePage,
            needAuth: true,
            onUnautorized: () => Boolean(store.getState().user),
        })
        .use({
            pathname: ROUTES.ChangePass,
            block: ProfileChangePassPage,
            needAuth: true,
            onUnautorized: () => Boolean(store.getState().user),
        })
        .use({
            pathname: ROUTES.Edit,
            block: ProfileEditPage,
            needAuth: true,
            onUnautorized: () => Boolean(store.getState().user),
        })
        .use({
            pathname: ROUTES.Chat,
            block: ChatPage,
            needAuth: true,
            onUnautorized: () => Boolean(store.getState().user),
        })
        .use({
            pathname: ROUTES.Page404,
            block: Page404,
        })
        .use({
            pathname: ROUTES.Page500,
            block: Page5xx,
        })
        .start();
});
