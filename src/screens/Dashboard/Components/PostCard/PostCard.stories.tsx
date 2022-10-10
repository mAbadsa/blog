import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import PostCard from '.';
import theme from '@styles/theme';

export default {
  title: 'Screens/Dashboard/Components',
  component: PostCard,
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = args => (
  <ThemeProvider theme={theme}>
    <PostCard {...args} />
  </ThemeProvider>
);

export const Standard = Template.bind({});

Standard.args = {};
