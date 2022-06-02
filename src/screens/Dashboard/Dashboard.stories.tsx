import { ComponentMeta, ComponentStory } from '@storybook/react';
import Dashboard from '.';

export default {
  title: 'Screens/Dashboard',
  component: Dashboard,
} as ComponentMeta<typeof Dashboard>;

const Template: ComponentStory<typeof Dashboard> = args => <Dashboard {...args} />;

export const standard = Template.bind({});
standard.args = {};
