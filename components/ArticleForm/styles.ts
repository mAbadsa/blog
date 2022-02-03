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
  tapPanel: {
    gridColumnStart: "2",
    gridColumnEnd: "2",
    // padding: "2rem 4rem",
    backgroundColor: "#fff",
    borderRadius: "0.375rem 0.375rem 0 0",
    boxShadow: "0 0 0 1px #0909091a",
    overflowWrap: "anywhere",
    // overflow: "auto",
    height: "calc(100vh - 56px - 72px)",
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
