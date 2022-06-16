import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import DeleteConfirm from '.';

export default {
  title: 'Components/DeleteConfirm',
  component: DeleteConfirm,
} as ComponentMeta<typeof DeleteConfirm>;

const Template: ComponentStory<typeof DeleteConfirm> = args => (
  <ThemeProvider theme={theme}>
    <DeleteConfirm {...args} />
  </ThemeProvider>
);
