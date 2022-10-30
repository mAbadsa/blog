import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import TagsSelectedList from '.';

export default {
  title: 'Component/ReadingList/TagsSelectedList',
  component: TagsSelectedList,
} as ComponentMeta<typeof TagsSelectedList>;

const Template: ComponentStory<typeof TagsSelectedList> = (args): any => {
  const [queryClient] = useState(() => new QueryClient());
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <TagsSelectedList {...args} />
    </ThemeProvider>
  </QueryClientProvider>;
};

export const defaultTagsSelectedList = Template.bind({});
defaultTagsSelectedList.args = {};
