import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    comment: {
      color: "#717171",
      paddingTop: "0.25rem",
      fontSize: "0.875rem",
    },
  })
);

export default useStyles;
