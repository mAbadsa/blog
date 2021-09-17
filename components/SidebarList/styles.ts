import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      width: '250px',
      [theme.breakpoints.down("sm")]: {
        display: 'none',
      }
    },
    ListItem: {
      paddingBottom: '0px',
    },
    ListItemText: {
      paddingLeft: theme.spacing(1),
    }
  })
);

export default useStyles;
