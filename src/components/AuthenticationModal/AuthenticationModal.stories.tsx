import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import AuthenticationModal from '.';

export default {
  title: 'Components/AuthenticationModal',
  component: AuthenticationModal,
} as ComponentMeta<typeof AuthenticationModal>;

const Template: ComponentStory<typeof AuthenticationModal> = args => (
  <ThemeProvider theme={theme}>
    <AuthenticationModal {...args} />
  </ThemeProvider>
);

export const AuthenticationModalDefault = Template.bind({});
AuthenticationModalDefault.args = {};
