const path = require('path');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],
    webpackFinal: async config => {
        config.resolve = {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                '~': path.join(path.resolve(__dirname, '..'), 'src'),
                '~storybook': path.join(
                    path.resolve(__dirname, '..'),
                    'src/storybook'
                )
            }
        };
        return config;
    }
    // framework: '@storybook/react',
    // core: {
    //     builder: '@storybook/react'
    // },
    // features: {
    //     storyStoreV7: true
    // }
};
