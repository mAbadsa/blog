import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  Modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem",
  },
  [theme.breakpoints.between(0, 640)]: {
    Modal: {
      maxHeight: "100%",
      height: "100%",
      width: "100%",
      maxWidth: "768px",
      padding: "0rem",
    },
  },
}));

export default useStyles;
