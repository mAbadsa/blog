import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  LineDivider: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "0.25rem",
    color: "#3d3d3d",
    width: "40px",
    height: "40px",
    padding: "8px",
    borderRadius: "0.375rem",
    transition: "all 0.25s",
    "& span svg": {
      fill: "currentColor",
    },
    "&:hover": {
      color: "#090909",
      backgroundColor: "rgba(0,0,0,0.035)",
      transition: "all 0.25s",
    },
  },
}));

export default useStyles;
