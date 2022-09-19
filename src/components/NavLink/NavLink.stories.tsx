import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavLink from './';

export default {
  title: 'Components/NavLink',
  component: NavLink,
} as ComponentMeta<typeof NavLink>;

const Template: ComponentStory<typeof NavLink> = args => <NavLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  outlined: true,
  variant: 'body1',
  children: 'Create Post',
};

export const ContainedPrimary = Template.bind({});
ContainedPrimary.args = {
  color: 'primary',
  children: 'Add',
};

export const TextPrimay = Template.bind({});
TextPrimay.args = {
  color: 'primary',
  children: 'Save',
};

export const TextSecondary = Template.bind({});
TextSecondary.args = {
  color: 'secondary',
  children: 'Save Draft',
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
  color: 'secondary',
  children: 'Save Draft',
};
