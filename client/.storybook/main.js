const path = require('path');
const custom = require('../webpack.config');

module.exports = {
  stories: ['../app/stories/**/*.stories.@(jsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-backgrounds',
    '@storybook/addon-storysource',
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(path.resolve(__dirname, '../..'));

    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
      plugins: [ ...config.plugins, ...custom.plugins ],
      resolve: { ...config.resolve, ...custom.resolve },
    };
  },
};
