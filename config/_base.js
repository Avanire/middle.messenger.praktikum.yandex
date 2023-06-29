const path = require('path');

const config = {
    env: process.env.NODE_ENV || 'development',

    path_base: path.resolve(__dirname, '..'),
    path_client: path.resolve(__dirname, '../src'),

    dir_client: 'src',
    dir_client_dist: 'dist',

    compiler_public_path: '/dist/'
};

config.globals = {
    'process.env': {
        NODE_ENV: JSON.stringify(config.env)
    },

    NODE_ENV: JSON.stringify(config.env),
    __DEV__: config.env === 'development',
    __PROD__: config.env === 'production'
};

config.aliases = {
    handlebars: 'handlebars/dist/cjs/handlebars.js',
    api: path.resolve(__dirname, 'src/api'),
    components: path.resolve(__dirname, 'src/components'),
    controllers: path.resolve(__dirname, 'src/controllers'),
    core: path.resolve(__dirname, 'src/core'),
    fonts: path.resolve(__dirname, 'src/fonts'),
    hocs: path.resolve(__dirname, 'src/hocs'),
    images: path.resolve(__dirname, 'src/images'),
    pages: path.resolve(__dirname, 'src/pages'),
    styles: path.resolve(__dirname, 'src/styles'),
    utils: path.resolve(__dirname, 'src/utils'),
};

config.utils_path = (function () {
    const resolve = path.resolve;

    const base = function () {
        return resolve.apply(path, [config.path_base].concat(Array.prototype.slice.call(arguments)));
    };

    return {
        base: base,
        client: base.bind(null, config.dir_client),
        dist: base.bind(null, config.dir_client_dist)
    }
})();

module.exports = config;
