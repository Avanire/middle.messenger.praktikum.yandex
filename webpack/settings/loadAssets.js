module.exports = () => webpackConfig => {
    webpackConfig.module.rules.push(
        {
            test: /\.(woff(2)?|svg|png|jpg|ico)$/,
            type: 'asset/resource',
        }
    );

    return webpackConfig;
};
