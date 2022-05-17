import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MoreArticles from '.';

export default {
  title: 'Components/MoreArticles',
  component: MoreArticles,
} as ComponentMeta<typeof MoreArticles>;

export const Template: ComponentStory<typeof MoreArticles> = args => <MoreArticles {...args} />;
