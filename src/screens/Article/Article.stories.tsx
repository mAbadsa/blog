import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Article from './Article';

export default {
  title: 'Screens/Article',
  component: Article,
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = args => <Article {...args} />;

const ArticlePage = Template.bind({});
ArticlePage.args = {
  article: {
    id: 11,
    title: '',
    slug: 'a7WQ',
    content: '',
    cover_image: '',
    tags: '',
    last_reading: '2022-02-13T13:50:15.150Z',
    user_id: 1,
    created_at: '2022-02-13T13:50:15.150Z',
    updated_at: '2022-02-13T13:50:15.150Z',
    username: 'moh22389',
    name: 'Muhammad Subhi',
    bio: null,
    email: 'moh22389@gmail.com',
    display_email: true,
    profile_image:
      'https://lh3.googleusercontent.com/a-/AOh14Ggb_W9utz2Flo-miY-qsUbiX9RxwrVpe5tQEAqkdg=s96-c',
    location: null,
    github_account: null,
    website_url: null,
    user_created_at: '2022-01-25T15:37:29.944Z',
  },
};
