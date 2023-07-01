module.exports = ({ tsconfigPath }) => webpackConfig => {
    webpackConfig.module.rules.push(
        {
            test: /\.ts?$/,
            use: [
                {
                    loader: 'ts-loader',
                    options: {
                        configFile: tsconfigPath,
                    },
                },
            ],
            exclude: /(node_modules)/,
        },
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        }
    );

    return webpackConfig;
};
