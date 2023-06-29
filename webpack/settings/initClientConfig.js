const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const config = require('../../config');

const paths = config.utils_path;
const { __DEV__, __PROD__ } = config.globals;

module.exports = ({entry, context, alias}) => webpackConfig => {
    if (alias) {
        console.log('Overriding alias option with', JSON.stringify(alias, null, 2));
    }

    webpackConfig = Object.assign(webpackConfig, {
        context,
        name: 'WebChat',
        target: 'web',
        devtool: __DEV__ ? 'eval-cheap-module-source-map' : undefined,
        entry: { app: './src/index.ts' },
        mode: __DEV__ ? 'development' : 'production',
        output: {
            filename: '[name].bundle.js',
            path: paths.base(config.dir_client_dist),
            pathinfo: false,
        },
        resolve: {
            extensions: ['.ts', '.js', '.json'],
            alias: config.aliases
        },
        module: {
            rules: []
        },
        stats: {
            all: undefined,
            builtAt: !__DEV__,
            chunks: !__DEV__,
            assets: !__DEV__,
            errors: true,
            warnings: true,
            outputPath: true,
            timings: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
            new MiniCssExtractPlugin(),
            new DuplicatePackageCheckerPlugin()
        ],
        optimization: {
            minimizer: [
                new TerserPlugin(),
                new CssMinimizerPlugin()
            ]
        }
    });

    if (__DEV__) {
        webpackConfig.plugins.push(
            new webpack.HotModuleReplacementPlugin(),
        );
    }

    if (__PROD__) {
        webpackConfig.plugins.push(
            new DuplicatePackageCheckerPlugin(),
        );
    }

    return webpackConfig;
}
