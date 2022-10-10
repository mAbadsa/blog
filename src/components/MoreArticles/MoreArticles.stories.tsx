import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import theme from '@styles/theme';
import MoreArticles from '.';

export default {
  title: 'Components/MoreArticles',
  component: MoreArticles,
} as ComponentMeta<typeof MoreArticles>;

const Template: ComponentStory<typeof MoreArticles> = args => (
  <ThemeProvider theme={theme}>
    <MoreArticles {...args} />
  </ThemeProvider>
);
export const MoreArticlesDefault = Template.bind({});
MoreArticlesDefault.args = {};
