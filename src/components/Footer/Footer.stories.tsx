import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from '.';
import theme from '@styles/theme';

export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => (
  <ThemeProvider theme={theme}>
    <Footer {...args} />
  </ThemeProvider>
);

export const FooterDefault = Template.bind({});
FooterDefault.args = {};
