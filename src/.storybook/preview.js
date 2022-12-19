import * as nextImage from 'next/image';
import theme from '../styles/theme';

// .storybook/preview.js
import { useMemo } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const withMuiTheme = (Story, context) => {
  const _theme = useMemo(() => theme);
  return (
    <MuiThemeProvider theme={_theme}>
      <CssBaseline />
      <Story {...context} />
    </MuiThemeProvider>
  );
};

export const decorators = [withMuiTheme];

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
