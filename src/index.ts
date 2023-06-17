import Router from './core/router.ts';
import { ROUTES } from './utils/constant.ts';
import LoginPage from './pages/login/login.ts';
import SignupPage from './pages/signup/signup.ts';
import ProfilePage from './pages/profile/profile.ts';
import ProfileChangePassPage from './pages/profile/profile-change-pass/profile-change-pass.ts';
import ProfileEditPage from './pages/profile/profile-edit/profile-edit.ts';
import Page404 from './pages/404/404.ts';
import ChatPage from './pages/chat/chat.ts';
import AuthController from './controllers/authController.ts';
import store from './core/store.ts';
import Page5xx from './pages/5xx/5xx.ts';

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
