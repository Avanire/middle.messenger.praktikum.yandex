const webpack = require('webpack');

module.exports = () => webpackConfig => {
    webpackConfig.watch = true;
    webpackConfig.devtool = 'eval-cheap-module-source-map';
    webpackConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
    );

    webpackConfig.devServer = {
        port: 3000,
        open: process.env.WEBPACK_SERVER_BROWSER || '/',
        historyApiFallback: true,
        hot: true,
        https: true,

        proxy: [
            {
                context: ['/proxy-api/**'],
                target: 'https://proxy-api/api/',
                pathRewrite: { '^/api/': '/' },
                secure: false,
                onProxyReq: proxyReq => {
                    proxyReq.setHeader('Host', 'my-custom-host');
                },
            },
        ],
    };

    return webpackConfig;
};
