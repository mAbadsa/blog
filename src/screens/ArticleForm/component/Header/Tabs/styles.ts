import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  Tabs: {
    flexGrow: 1,
  },
  appBar_bg: {
    backgroundColor: 'transparent !important',
    color: '#090909 !important',
    boxShadow: 'none !important',
    '& button': {
      margin: '0 0.25rem',
      borderRadius: '0.375rem',
      '&:first-of-type': {
        width: '50px',
      },
      '&:nth-of-type(2)': {
        width: '80px',
      },
    },
    '& button:hover': {
      backgroundColor: '#3b49df1a !important',
      transition: 'all 0.25s',
    },
    '& span[class^=PrivateTabIndicator]': {
      backgroundColor: '#3b49df',
      display: 'none',
    },
    '& button[class^=MuiButtonBase]': {
      minWidth: '20px',
      width: 'fit-content',
      textTransform: 'capitalize',
      fontWeight: 'normal',
      fontSize: '1.125rem',
    },
    '& button[aria-selected=true]': {
      fontWeight: 'bold',
    },
  },
}));

export default useStyles;
