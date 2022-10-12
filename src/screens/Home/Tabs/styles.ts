import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  Taps: {
    flexGrow: 1,
  },
  appBar_bg: {
    backgroundColor: 'transparent !important',
    color: '#090909 !important',
    boxShadow: 'none !important',
    '& span[class^=PrivateTabIndicator]': {
      backgroundColor: 'transparent',
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
