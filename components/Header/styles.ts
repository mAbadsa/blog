import { alpha, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  Header: {
    flexGrow: 1,
  },
  hidden: {
    display: "none",
  },
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    height: "56px",
  },
  toobar: {
    padding: "0 0.5rem",
    minHeight: "56px",
  },
  drawerSideBar: {
    "& .MuiDrawer-paper": {
      maxWidth: "300px",
      // padding: theme.spacing(1),
    },
  },
  menuButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    padding: "0.5rem",
    color: "#3d3d3d",
    backgroundColor: "#00000000",
    display: "flex",
    borderRadius: "0.375rem",
    width: "40px",
    height: "40px",
    "&:hover": {
      color: "#323ebe",
      backgroundColor: "#3b49df1a",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
      transition: "all 0.25s",
    },
  },
  title: {
    padding: "0",
    [theme.breakpoints.down("xs")]: {
      // flexGrow: 1,
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
    position: "relative",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "350px",
      flexGrow: "0.3",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing(2),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    top: 0,
    right: "-13px",
    pointerEvents: "none",
    display: "flex",
    color: "#3d3d3d",
    backgroundColor: "#00000000",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 1000,
    transition: "all 0.25s",
    "&:hover": {
      color: "#323ebe",
      backgroundColor: "#3b49df1a",
      transition: "all 0.25s",
    },
  },
  inputRoot: {
    color: "#090909",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 2, 1, 1),
    lineHeight: "1.5",
    resize: "vertical",
    border: "1px solid #d6d6d7",
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      // width: '20ch',
    },
  },
}));

export default useStyles;
