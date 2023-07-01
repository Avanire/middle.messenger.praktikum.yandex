const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: { main: './src/index.ts' },
    devServer: {
        static: path.join(__dirname, './dist'),
        historyApiFallback: true,
        hot: true,
        https: true,
        port: 3000,

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
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'project.bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        fallback: {
            fs: false,
        },
        alias: {
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
        },
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json'),
                        },
                    },
                ],
                exclude: /(node_modules)/,
            },
            {
                test: /\.(woff(2)?|svg|png|jpg|ico)$/,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
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
        ],
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
};
