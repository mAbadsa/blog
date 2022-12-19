import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import Series from '.';
import theme from '@styles/theme';

export default {
  title: 'Screens/Series',
  component: Series,
} as Meta<typeof Series>;

const Template: StoryFn<typeof Series> = args => {
  return (
    <ThemeProvider theme={theme}>
      <Series {...args} />
    </ThemeProvider>
  );
};

export const SeriesStandard = Template.bind({});
SeriesStandard.args = {};
