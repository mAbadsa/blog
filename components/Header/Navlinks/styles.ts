import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

export default useStyles;
