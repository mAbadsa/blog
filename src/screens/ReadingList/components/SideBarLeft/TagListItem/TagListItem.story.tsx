import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import TagListItem from '.';

export default {
  title: 'Component/ReadingList/Header',
  component: TagListItem,
} as ComponentMeta<typeof TagListItem>;

const Template: ComponentStory<typeof TagListItem> = (args): any => {
  const [queryClient] = useState(() => new QueryClient());
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <TagListItem {...args} />
    </ThemeProvider>
  </QueryClientProvider>;
};

export const defaultTagListItem = Template.bind({});
defaultTagListItem.args = {};
