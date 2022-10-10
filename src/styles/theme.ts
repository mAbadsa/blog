import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      // main: '#039be5',
      main: '#3b49df',
    },
    gray: {
      main: '#d6d6d7',
    },
    secondary: {
      main: '#262626',
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
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    h1: {
      fontSize: '2.25rem',
      fontWeight: 800,
      lineHeight: '45px',
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: '30px',
    },
    h3: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: '30px',
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '24px',
    },
    h5: {
      fontSize: '1rem',
      lineHeight: '20px',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '24px',
    },
  },
  spacing: 4,
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        backgroundColor: '#3b49df',
        alignItems: 'flex-start',
        fontWeight: 400,
        padding: '0.5rem 1rem',
        fontSize: '1rem',
      },
      containedPrimary: {
        color: '#fff',
        backgroundColor: '#3b49df',
        '&:hover': {
          backgroundColor: '#2f3ab2',
        },
      },
      textSecondary: {
        color: '#262626',
        backgroundColor: '#00000000',
        '&:hover': {
          backgroundColor: '#3b49df1a',
        },
      },
      outlinedPrimary: {
        color: '#3b49df',
        backgroundColor: '#fff',
        border: '1px solid #3b49df',
        '&:hover': {
          backgroundColor: '#3b49df',
          color: '#fff',
        },
      },
      outlinedSecondary: {
        color: '#262626',
        backgroundColor: '#00000000',
        border: '2px solid #d6d6d7',
        '&:hover': {
          color: '#090909',
          backgroundColor: '#00000005',
          border: '2px solid #d6d6d7',
        },
      },
      textPrimary: {
        color: '#262626',
        backgroundColor: '#00000000',
        '&:hover': {
          color: '#3b49df',
          backgroundColor: '#3b49df1a',
        },
      },
      fullWidth: {
        maxWidth: 159,
      },
    },
    MuiIconButton: {
      colorSecondary: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '0.25rem',
        color: '#3d3d3d',
        width: '40px',
        height: '40px',
        padding: '8px',
        borderRadius: '0.375rem',
        transition: 'all 0.25s',
        '& span svg': {
          fill: 'currentColor',
        },
        '&:hover': {
          color: '#090909',
          backgroundColor: 'rgba(0,0,0,0.035)',
          transition: 'all 0.25s',
        },
      },
      colorPrimary: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: "0.25rem",
        color: '#262626',
        width: '40px',
        height: '40px',
        padding: '8px',
        borderRadius: '0.375rem',
        transition: 'all 0.25s',
        '& span svg': {
          fill: 'currentColor',
        },
        '&:hover': {
          color: '#2f3ab2',
          backgroundColor: '#3b49df1a',
          transition: 'all 0.25s',
        },
      },
    },
    MuiLink: {
      root: {
        padding: '0.5rem 1rem',
      },
    },
  },
});

export default theme;
