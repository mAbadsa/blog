import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  ({
    SidebarList: {
      paddingLeft: theme.spacing(1),
      transition: 'all 0.2s',
    },
    hidden: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    ListItem: {
      paddingBottom: "0px !important",
      paddingLeft: theme.spacing(1) + 'px !important',
      "& svg": {
        width: "24px",
        height: "24px",
      },
    },
    listItemText: {
      paddingLeft: theme.spacing(1),
    },
    listTitle: {
      fontSize: '1rem !important',
      fontWeight: 'bold',
    },
  })
);

export default useStyles;
