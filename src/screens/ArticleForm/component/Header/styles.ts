import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  Header: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
    gridColumnEnd: 'span 2',
    height: '56px',
  },
  logo: {
    marginRight: theme.spacing(2),
    lineHeight: '24px',
    '& a': {
      display: 'flex',
      maxWidth: '175px',
      lineHeight: '18px',
      alignSelf: 'center',
      alignItems: 'center',
      padding: '0',
    },
    '& svg': {
      '& rect': {
        fill: '#090909',
      },
      '& path': {
        fill: '#fff',
      },
    },
  },
  title: {
    display: 'flex',
    flex: '1 1 0% !important',
    alignItems: 'center !important',
  },
  headerTaps: {
    display: 'flex',
    alignItems: 'center',
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    Header: {
      padding: '0 0.5rem',
    },
    logo: {
      display: 'none',
    },
    closeForm: {
      position: 'static',
    },
  },
  [`@media (max-width: 639px)`]: {
    title: {
      visibility: 'hidden',
    },
  },
  [`@media (min-width: 1024px)`]: {
    closeForm: {
      position: 'absolute',
      top: '0.5rem',
      right: '0.5rem',
    },
  },
}));

export default useStyles;
