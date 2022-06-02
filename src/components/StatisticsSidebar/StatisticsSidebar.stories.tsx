import { ComponentMeta, ComponentStory } from '@storybook/react';
import StatisticsSidebar from '.';

export default {
  title: 'Components/StatisticsSidebar',
  component: StatisticsSidebar,
} as ComponentMeta<typeof StatisticsSidebar>;

const Template: ComponentStory<typeof StatisticsSidebar> = args => <StatisticsSidebar {...args} />;

export const standard = Template.bind({});
standard.args = {};
