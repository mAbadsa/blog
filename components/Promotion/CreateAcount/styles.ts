import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
        overflowWrap: 'anywhere',
        fontWeight: '300',
      },
    },
    mainLink: {
      fontSize: "1.125rem !important",
      fontWeight: 700,
      marginBottom: "0.5rem !important",
      textDecoration: 'none',
      "& a": {
        fontWeight: 700,
      },
    },
  })
);

export default useStyles;
