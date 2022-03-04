import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  CreateAccount: {
    padding: theme.spacing(2),
    // margin: theme.spacing(1),
    backgroundColor: "#f9f9f9",
    color: "#242424",
    boxShadow: "0 0 0 1px #0909090d",
    borderRadius: "0.375rem",
    "& p": {
      marginBottom: "1rem",
      color: "#575757",
      overflowWrap: "anywhere",
      fontWeight: "300",
    },
  },
  mainLink: {
    fontSize: "1.125rem !important",
    fontWeight: 700,
    marginBottom: "0.5rem !important",
    textDecoration: "none",
    "& a": {
      fontWeight: 700,
    },
  },
  loginBtnBox: {
    display: "flex",
    flexDirection: "column",
    "& a": {
      position: "relative",
      borderRadius: "0.375rem",
      width: "100%",
      display: "inline-block",
      fontSize: "1rem",
      textDecoration: "none",
      cursor: "pointer",
      textAlign: "center",
      padding: "calc(0.5rem - 0px) calc(1rem - 0px)",
      marginBottom: "0.5rem",
      boxShadow: "0 1px 3px #0000000d",
      lineHeight: 1.5,
      fontWeight: 500,
      overflowWrap: "normal",
      transition: "all 0.2s",
    },
  },
  createButton: {
    color: "#f9f9f9",
    backgroundColor: "#3b49df",
    "&:hover": {
      backgroundColor: "#323ebe",
      textDecoration: "none",
      transition: "all 0.2s",
    },
  },
  loginButton: {
    color: "#323ebe",
    backgroundColor: "#00000000",
    "&:hover": {
      backgroundColor: "#00000009",
      textDecoration: "none",
      transition: "all 0.2s",
    },
  },
}));

export default useStyles;
