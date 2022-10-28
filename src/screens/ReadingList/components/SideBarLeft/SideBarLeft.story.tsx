import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import SideBarLeft from '.';

export default {
  title: 'Component/ReadingList/Header',
  component: SideBarLeft,
} as ComponentMeta<typeof SideBarLeft>;

const Template: ComponentStory<typeof SideBarLeft> = (args): any => {
  const [queryClient] = useState(() => new QueryClient());
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <SideBarLeft {...args} />
    </ThemeProvider>
  </QueryClientProvider>;
};

export const defaultSideBarLeft = Template.bind({});
defaultSideBarLeft.args = {};
