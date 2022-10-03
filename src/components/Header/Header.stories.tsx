import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserProvider } from '@auth0/nextjs-auth0';

import Header from './';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => (
  <UserProvider>
    <Header {...args} />
  </UserProvider>
);

export const DisplayHeader = Template.bind({});
DisplayHeader.args = {
  display: false,
};

export const HiddenPageHeader = Template.bind({});
HiddenPageHeader.args = {
  display: true,
};
