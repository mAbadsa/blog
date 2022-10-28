import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import EmptyListMessage from '.';

export default {
  title: 'Component/ReadingList/Header',
  component: EmptyListMessage,
} as ComponentMeta<typeof EmptyListMessage>;

const Template: ComponentStory<typeof EmptyListMessage> = (args): any => {
  const [queryClient] = useState(() => new QueryClient());
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <EmptyListMessage {...args} />
    </ThemeProvider>
  </QueryClientProvider>;
};

export const defaultEmptyListMessage = Template.bind({});
defaultEmptyListMessage.args = {};
