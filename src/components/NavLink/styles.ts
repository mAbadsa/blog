import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  outlined: {
    border: "1px solid #3b49df",
    borderRadius: "0.375rem",
    whiteSpace: "nowrap",
    transition: "all 0.25s",
    "&:hover": {
      backgroundColor: "#3b49df",
      color: "#fff",
      transition: "all 0.25s",
    },
  },
  withIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      "& svg": {
        fill: "#323ebe",
      },
    },
  },
  textSecondary: {
    color: "#717171",
    display: "inline-block",
    padding: "0.25rem",
    fontSize: "0.875rem",
    lineHeight: 1.3,
    borderRadius: "0.375rem",
  },
  textPrimary: {
    borderRadius: "0.375rem",
    backgroundColor: "#00000000",
    "&:hover": {
      backgroundColor: "#3b49df1a",
      color: "#323ebe",
      transition: "all 0.25s",
    },
  },
}));

export default useStyles;
