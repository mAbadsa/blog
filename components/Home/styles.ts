import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-around",
    },
    sidebar: {
      maxWidth: "220px",
    },
    // rightSidebar: {
    //   maxWidth: "240px",
    // },
  })
);

export default useStyles;
