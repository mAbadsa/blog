import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#FFF",
      marginBlock: theme.spacing(5),
      marginInline: "auto",
      padding: theme.spacing(5),
      width: "min(640px, 80%)",
    },
    title: {
      fontSize: "1.5rem",
      color: theme.palette.primary.main,
      fontWeight: "bold",
      marginBottom: "1.2rem",
      marginTop: "2rem",
    },
    loginStrategy: {
      display: "flex",
      justifyContent: "center",
    },
    divider: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBlock: "1rem",
      "& span": {
        position: "relative",
        backgroundColor: "#FFFFFF",
        paddingInline: "0.5rem",
        color: "#4d5760",
        fontWeight: "400",
        width: "50%",
        textAlign: "center",
        ZIndex: "10",
      },
      "&::before": {
        position: "absolute",
        content: '""',
        width: "100%",
        height: "2.5px",
        backgroundColor: "#C7C7C7",
        zIndex: "0",
      },
    },
  })
);

export default useStyles;
