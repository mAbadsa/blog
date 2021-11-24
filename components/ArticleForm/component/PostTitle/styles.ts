import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  PostTitle: {},
  textArea: {
    whiteSpace: "pre-wrap",
    minHeight: "60px",
    maxHeight: "60px",
    fontSize: "3rem",
    fontWeight: 800,
    lineHeight: 1.25,
    background: "transparent",
    border: "none",
    padding: 0,
    margin: 0,
    outline: "none",
    width: "100%",
    boxShadow: "none",
    resize: "none",
    transition: "none",
  },
  [theme.breakpoints.between("xs", "sm")]: {
    textArea: {
      fontSize: "1.875rem",
      fontWeight: 700,
      lineHeight: "1.25",
      minHeight: "38px",
      maxHeight: "38px",
    },
  },
}));

export default useStyles;
