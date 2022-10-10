import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import ConfirmDeleteScreen from '.';
import theme from '@styles/theme';

export default {
  title: 'Screens/Dashboard',
  component: ConfirmDeleteScreen,
} as ComponentMeta<typeof ConfirmDeleteScreen>;

const Template: ComponentStory<typeof ConfirmDeleteScreen> = args => {
  return (
    <ThemeProvider theme={theme}>
      <ConfirmDeleteScreen {...args} />
    </ThemeProvider>
  );
};

export const standard = Template.bind({});
standard.args = {};
