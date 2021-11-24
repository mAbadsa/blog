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
  [theme.breakpoints.between("xs", "sm")]: {
    Header: {
      padding: "0 0.5rem",
    },
    logo: {
      display: "none",
    },
  },
  // [`@media (min-width: 640px)`]: {
  //   title: {
  //     display: "none",
  //   },
  // },
  [`@media (max-width: 639px)`]: {
    title: {
      display: "none",
    },
  },
}));

export default useStyles;
