import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  ({
    SidebarLeft: {
      backgroundColor: "#efefef",
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    list: {
      width: 250,
    },
    ListItemText: {
      color: theme.palette.primary.main,
    },
  })
);

export default useStyles;
