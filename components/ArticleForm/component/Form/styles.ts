import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  ArticleForm: {
    gridColumnStart: "2",
    gridColumnEnd: "2",
    padding: "2rem 3rem",
    backgroundColor: "#fff",
    borderRadius: "0.375rem 0.375rem 0 0",
    boxShadow: "0 0 0 1px #0909091a",
    overflowWrap: "anywhere",
    overflow: "auto",
    height: "calc(100vh - 56px - 72px)",
  },
}));

export default useStyles;
