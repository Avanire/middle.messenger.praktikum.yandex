require.extensions['.pcss'] = function () {
    module.exports = () => ({});
};

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const { window } = new JSDOM('<div id="app"></div>', { url: 'https://localhost:3000' });
const { document } = window;
global.window = window;
global.document = document;
