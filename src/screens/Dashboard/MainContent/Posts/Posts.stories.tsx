import { ComponentStory, ComponentMeta } from '@storybook/react';
import Posts from '.';

export default {
  title: 'Components/Posts',
  component: Posts,
} as ComponentMeta<typeof Posts>;

const Template: ComponentStory<typeof Posts> = args => <Posts {...args} />;

export const Standard = Template.bind({});
Standard.args = {};
