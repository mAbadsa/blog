import { alpha, createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
      [theme.breakpoints.down('xs')]: {
        flexGrow: 1,
      },
    },
    list: {
      width: 250,
      minHeight: 500,
    },
    ListItemText: {
      color: theme.palette.primary.main,
    },
    search: {
      flexGrow: 1,
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '350px',
        flexGrow: '0.3',
      },
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
      [theme.breakpoints.up('xs')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        // width: '20ch',
      },
    },
  }),
);

export default useStyles;
