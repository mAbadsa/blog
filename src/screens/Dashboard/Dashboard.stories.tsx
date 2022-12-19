import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import Dashboard from '.';
import theme from '@styles/theme';

export default {
  title: 'Screens/Dashboard',
  component: Dashboard,
} as Meta<typeof Dashboard>;

const Template: StoryFn<typeof Dashboard> = args => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard {...args} />
    </ThemeProvider>
  );
};

export const DashboardStandard = Template.bind({});
DashboardStandard.args = {};
