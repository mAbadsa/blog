import React, { MouseEventHandler } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core';
import Theme from '@styles/theme';
import Header from '.';

export default {
  title: 'ArticleForm/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => {
  return (
    <ThemeProvider theme={Theme}>
      <Header {...args} />
    </ThemeProvider>
  );
};

export const Standard = Template.bind({});
Standard.args = {
  value: 0,
  handleChange: () => {},
  handleClose: () => {},
};
