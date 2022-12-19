import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import PostCard from '.';
import theme from '@styles/theme';

export default {
  title: 'Screens/Dashboard/Components',
  component: PostCard,
} as Meta<typeof PostCard>;

const Template: StoryFn<typeof PostCard> = args => (
  <ThemeProvider theme={theme}>
    <PostCard {...args} />
  </ThemeProvider>
);

export const PostCardStandard = Template.bind({});

PostCardStandard.args = {};
