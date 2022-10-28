import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import ReadingListItemsContainer from '.';

export default {
  title: 'Component/ReadingList/ReadingListItem',
  component: ReadingListItemsContainer,
} as ComponentMeta<typeof ReadingListItemsContainer>;

const Template: ComponentStory<typeof ReadingListItemsContainer> = (args): any => {
  const [queryClient] = useState(() => new QueryClient());
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <ReadingListItemsContainer {...args} />
    </ThemeProvider>
  </QueryClientProvider>;
};

export const defaultReadingListItemsContainer = Template.bind({});
defaultReadingListItemsContainer.args = {};
