import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  Home: {
    width: "100%",
    maxWidth: "1280px",
    paddingRight: "1rem !important",
    paddingLeft: "1rem !important",
  },
  mainGrid: {
    display: "flex",
    justifyContent: "space-between",
  },
  rightSidebar: {
    display: "none",
  },
  [theme.breakpoints.between("xs", "sm")]: {
    sidebar: {
      display: "none",
    },
    mainFeed: {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
  [theme.breakpoints.between("md", "lg")]: {
    sidebar: {
      display: "flex",
      maxWidth: "28.5%",
      flexBasis: "28.5%",
    },
    mainFeed: {
      maxWidth: "70%",
      flexBasis: "70%",
    },
    rightSidebar: {
      display: "none",
    },
  },
  [theme.breakpoints.up("lg")]: {
    sidebar: {
      display: "flex",
      flexBasis: "24%",
      maxWidth: "24%",
    },
    mainFeed: {
      maxWidth: "50%",
      flexBasis: "50%",
    },
    rightSidebar: {
      display: "block",
      maxWidth: "24%",
      flexBasis: "24%",
    },
  },
}));

export default useStyles;
