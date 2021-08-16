import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      
    },
    appBar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
        transition: 'all 0.25s',
      },
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
    ListItemText: {
      color: theme.palette.primary.main,
    }
  }),
);

export default useStyles;
