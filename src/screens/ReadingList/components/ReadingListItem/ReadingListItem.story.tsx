import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import ReadingListItem from '.';

export default {
  title: 'Component/ReadingList/ReadingListItem',
  component: ReadingListItem,
} as ComponentMeta<typeof ReadingListItem>;

const Template: ComponentStory<typeof ReadingListItem> = (args): any => {
  const [queryClient] = useState(() => new QueryClient());
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <ReadingListItem {...args} />
    </ThemeProvider>
  </QueryClientProvider>;
};

export const defaultReadingListItem = Template.bind({});
defaultReadingListItem.args = {};
