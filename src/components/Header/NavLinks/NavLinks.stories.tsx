import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserProvider } from '@auth0/nextjs-auth0';
import NavLinks from '.';

export default {
  title: 'Components/Header/NavLinks',
  component: NavLinks,
} as ComponentMeta<typeof NavLinks>;

const Template: ComponentStory<typeof NavLinks> = args => (
  <UserProvider>
    <NavLinks {...args} />
  </UserProvider>
);

export const UserLogoutNavLinks = Template.bind({});
UserLogoutNavLinks.args = {
  user: undefined,
  isLoading: false,
  error: undefined,
};

export const BeforeLoginNavLinks = Template.bind({});
BeforeLoginNavLinks.args = {
  user: undefined,
  isLoading: true,
  error: undefined,
};

export const UserLoginNavLinks = Template.bind({});
UserLoginNavLinks.args = {
  user: {
    email: 'muhammad@users.com',
    email_verified: true,
    name: 'Muhammad',
    nickname: 'mAbadas',
    picture: 'https://i.pravatar.cc/300',
  },
  isLoading: false,
  error: undefined,
};

export const LoginErrorNavLinks = Template.bind({});
LoginErrorNavLinks.args = {
  user: undefined,
  isLoading: false,
  error: 'something went wrong',
};
