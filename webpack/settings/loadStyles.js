const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => webpackConfig => {
    webpackConfig.module.rules.push(
        {
            test: /\.css|pcss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { importLoaders: 1 },
                },
                'postcss-loader',
            ],
        },
    );

    return webpackConfig;
};
