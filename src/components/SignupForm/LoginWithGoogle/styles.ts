import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: "#000 !important",
      justifyContent: "center",
      "& div": {
        backgroundColor: "transparent !important",
        padding: "0 !important",
      },
    },
  })
);

export default useStyles;
