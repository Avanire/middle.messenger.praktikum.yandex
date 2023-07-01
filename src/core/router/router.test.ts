import Router from './router';
import { ROUTES } from '../../utils/constant';
import LoginPage from '../../pages/login/login';
import { beforeEach } from 'mocha';
import {JSDOM} from 'jsdom';
import { expect } from 'chai';
import SignupPage from '../../pages/signup/signup';
import Page404 from '../../pages/404/404';

describe('Testing router', () => {
    beforeEach(() => {
        const dom = new JSDOM(`<!doctype html><div id="root"></div>`);

        global.document = dom.window.document;

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
                pathname: ROUTES.Page404,
                block: Page404,
            });
    });

    it('should be a index page', function () {
        expect(window.location.pathname).to.equal('/');
    });

    it('should be a signup page', function () {
        Router.go(ROUTES.Signup);

        expect(window.location.pathname).to.equal(ROUTES.Signup);
    });

    it('should be a 404 page', function () {
        Router.go('wrong-page');

        expect(window.location.pathname).to.equal(ROUTES.Page404);
    });
});
