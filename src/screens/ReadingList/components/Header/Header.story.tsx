import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import Header from '.';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';

export default {
  title: 'Component/ReadingList/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args): any => {
  const [queryClient] = useState(() => new QueryClient());
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Header {...args} />
    </ThemeProvider>
  </QueryClientProvider>;
};

export const defaultHeader = Template.bind({});
defaultHeader.args = {};
