import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  ArticleForm: {
    display: "grid",
    gridTemplateColumns: "64px 7fr 3fr",
    gridTemplateRows: "min-content 1fr min-content",
    gap: "0 1rem",
    padding: "0 1rem",
    maxWidth: "1280px",
    margin: "0 auto",
    fontSize: "1rem",
  },
  [theme.breakpoints.between("xs", "sm")]: {
    ArticleForm: {
      gridTemplateColumns: "0 7fr",
      gap: "0rem 0rem",
      padding: "0rem",
    },
  },
  [theme.breakpoints.between("md", "lg")]: {
    ArticleForm: {
      gridTemplateColumns: "0px 7fr 3fr",
      gap: "0rem 0rem",
      padding: "0rem 0.5rem",
    },
  },
  [theme.breakpoints.up("lg")]: {
    ArticleForm: {
      gridTemplateColumns: "64px 7fr 3fr",
      gap: "0rem 0rem",
      padding: "0rem 0.5rem",
    },
  },
}));

export default useStyles;
