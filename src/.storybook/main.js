const config = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    'storybook-addon-material-ui',
    'postcss-flexbugs-fixes',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  core: {
    builder: 'webpack5',
  },
  docs: {
    docsPage: 'automatic',
  },
};
module.exports = config;
