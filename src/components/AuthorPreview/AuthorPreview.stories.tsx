import { ComponentStory, ComponentMeta } from '@storybook/react';
import AuthorPreview from './AuthorPreview';

export default {
  title: 'Components/AuthPreview',
  component: AuthorPreview,
} as ComponentMeta<typeof AuthorPreview>;

export const Template: ComponentStory<typeof AuthorPreview> = args => <AuthorPreview {...args} />;

export const AuthorPreviewDefault = Template.bind({});
