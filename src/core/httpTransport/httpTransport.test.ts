import HttpTransport from './httpTransport';
import { JSDOM } from 'jsdom';
import { beforeEach } from 'mocha';
import { expect } from 'chai';

const api = new HttpTransport('/auth');

describe("test http", function () {
    beforeEach(() => {
        const dom = new JSDOM();
        global.XMLHttpRequest = dom.window.XMLHttpRequest;

    })

    it('Test GET should catch error Cookie is not valid', async () => {
        await api.get('/user')
            .then()
            .catch((e) => {
                expect(e.reason).equal('Cookie is not valid' );
            });
    });

    it('Test POST should catch error Cookie is not valid', async () => {
        await api.post('/logout')
            .then()
            .catch((e) => {
                expect(e.reason).equal('Cookie is not valid');
            });
    });

});
