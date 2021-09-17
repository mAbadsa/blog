import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      // main: '#039be5',
      main: '#0e0b9a',
    },
    secondary: {
      main: '#ffab00',
    },
    text: {
      primary: '#252525',
      secondary: '#f5f5f5',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 660,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;