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
}));

export default useStyles;
