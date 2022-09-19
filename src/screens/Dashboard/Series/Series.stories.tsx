import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import Series from '.';
import theme from '../../../../styles/theme';

export default {
  title: 'Screens/Series',
  component: Series,
} as ComponentMeta<typeof Series>;

const Template: ComponentStory<typeof Series> = args => {
  return (
    <ThemeProvider theme={theme}>
      <Series {...args} />
    </ThemeProvider>
  );
};

export const standard = Template.bind({});
standard.args = {};
