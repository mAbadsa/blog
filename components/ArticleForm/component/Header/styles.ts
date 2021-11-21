import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  Header: {
    display: "flex",
    alignItems: "center",
    gridColumnEnd: "span 2",
    height: "56px",
  },
  logo: {
    marginRight: "0.5rem",
    lineHeight: "0",
    "& svg": {
      "& rect": {
        fill: "#090909",
      },
      "& path": {
        fill: "#fff",
      },
    },
  },
}));

export default useStyles;
