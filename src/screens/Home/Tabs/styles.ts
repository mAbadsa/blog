import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  Taps: {
    flexGrow: 1,
  },
  appBar_bg: {
    backgroundColor: 'transparent !important',
    color: '#090909 !important',
    boxShadow: 'none !important',
    padding: `${theme.spacing(1)}px 0`,
    '& span[class^=PrivateTabIndicator]': {
      backgroundColor: 'transparent',
    },
    '& button[class^=MuiButtonBase]': {
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
      minWidth: '20px',
      width: 'fit-content',
      textTransform: 'capitalize',
      fontWeight: 'normal',
      fontSize: '1.125rem',
      transition: 'all 0.25s',
      '&:hover': {
        background: '#fff',
        color: '#3b4ce5',
        borderRadius: '0.375rem',
        transition: 'all 0.25s',
      },
    },
    '& button[aria-selected=true]': {
      fontWeight: 'bold',
    },
  },
}));

export default useStyles;
