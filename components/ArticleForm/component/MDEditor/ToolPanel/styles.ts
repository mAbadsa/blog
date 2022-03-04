import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  ToolPanel: {
    position: "sticky",
    display: "flex",
    top: 0,
    backgroundColor: "#f9f9f9",
    padding: "0.5rem 3rem",
    justifyContent: "space-between",
  },
  mainItem: {
    display: "flex",
  },
  extraItem: {
    position: "relative",
  },
  moreBtn: {
    "&:hover": {
      color: "#090909",
    },
  },
  hiddenMenu: {
    display: "flex",
  },
}));

export default useStyles;
