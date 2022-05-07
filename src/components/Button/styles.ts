import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  MUIButton: {},
  withButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      "& svg": {
        fill: "#323ebe",
      },
    },
  },
}));

export default useStyles;
