import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  ({
    SidebarList: {
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      transition: 'all 0.2s',
    },
    hamburger__content__header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid rgba(9, 9, 9, 0.1)',
      padding: '0 0.25rem 0 1rem',
      minHeight: '3.5rem',
      '& button': {
        borderRadius: '50px',
        width: '40px',
        minWidth: '40px !important',
        height: '40px',
        padding: '0.0rem',
        color: '#3d3d3d',
        '&:hover': {
          color: '#090909',
        },
      },
      '& h6': {
        fontWeight: 700,
        fontSize: '1.125rem',
        wordBreak: 'break-word',
        lineHeight: 1.25,
      },
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
