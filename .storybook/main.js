module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-material-ui',
    'postcss-flexbugs-fixes',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
