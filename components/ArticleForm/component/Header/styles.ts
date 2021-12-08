import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  Header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
  headerTitle: {
    display: "flex",
    alignItems: "center",
  },
  headerTaps: {
    display: "flex",
    alignItems: "center",
  },
  closeForm: {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem",
    borderRadius: "0.375rem",
    width: "40px",
    height: "40px",
    gridColumnStart: "2",
    gridColumnEnd: "3",
    transition: "all 0.25s",
    "&:hover span svg": {
      fill: "#090909",
      transition: "all 0.25s",
    },
  },
  [theme.breakpoints.between("xs", "sm")]: {
    Header: {
      padding: "0 0.5rem",
    },
    logo: {
      display: "none",
    },
    closeForm: {
      position: "static",
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
