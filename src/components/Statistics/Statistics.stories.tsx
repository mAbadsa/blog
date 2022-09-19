import { ComponentMeta, ComponentStory } from '@storybook/react';
import Statistics from '.';

export default {
  title: 'Components/Statistics',
  component: Statistics,
} as ComponentMeta<typeof Statistics>;

const Template: ComponentStory<typeof Statistics> = args => <Statistics {...args} />;

export const standard = Template.bind({});
standard.args = {};
