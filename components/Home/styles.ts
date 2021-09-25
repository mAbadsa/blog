import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-around",
    },
    sidebar: {
      maxWidth: "25%",
    },
    rightSidebar: {
      maxWidth: "25%",
    },
  })
);

export default useStyles;
