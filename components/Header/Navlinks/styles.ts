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
    sideMenuNavLink: {
      display: 'none',
      color: theme.palette.primary.main,
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        transition: 'all 0.25s',
      },
    },
  }),
);

export default useStyles;
