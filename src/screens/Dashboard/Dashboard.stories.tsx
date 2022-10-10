import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import Dashboard from '.';
import theme from '@styles/theme';

export default {
  title: 'Screens/Dashboard',
  component: Dashboard,
} as ComponentMeta<typeof Dashboard>;

const Template: ComponentStory<typeof Dashboard> = args => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard {...args} />
    </ThemeProvider>
  );
};

export const standard = Template.bind({});
standard.args = {};
