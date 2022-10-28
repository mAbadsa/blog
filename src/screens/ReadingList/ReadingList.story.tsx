import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import ReadingList from '.';
import theme from '@styles/theme';

export default {
  title: 'Screens/ReadingList',
  component: ReadingList,
} as ComponentMeta<typeof ReadingList>;

const Template: ComponentStory<typeof ReadingList> = args => {
  return (
    <ThemeProvider theme={theme}>
      <ReadingList {...args} />
    </ThemeProvider>
  );
};

export const standard = Template.bind({});
standard.args = {};
