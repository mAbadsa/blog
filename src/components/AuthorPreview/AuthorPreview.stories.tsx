import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';

import AuthorPreview from './AuthorPreview';

export default {
  title: 'Components/AuthPreview',
  component: AuthorPreview,
} as ComponentMeta<typeof AuthorPreview>;

const Template: ComponentStory<typeof AuthorPreview> = args => (
  <ThemeProvider theme={theme}>
    <AuthorPreview {...args} />
  </ThemeProvider>
);

export const AuthorPreviewDefault = Template.bind({});
AuthorPreviewDefault.args = {
  userdata: {
    name: 'Muhammad Alabadsa',
    username: 'mAbadsa',
    avatar: '',
    bio: 'Some user info details',
    email: 'mabadsa@user.com',
    githubAccount: 'https://github/mAbadsa',
    websiteUrl: '',
    location: 'Palestine-Gaza',
    education: '',
    joined: '25/3/2021',
  },
};
