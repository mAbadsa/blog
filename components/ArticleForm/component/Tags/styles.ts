import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  Tags: {
    position: "relative",
    overflowWrap: "anywhere",
  },
  tagsInput: {
    outline: 0,
    fontFamily:
      "'SF Mono', SFMono-Regular, Consolas, 'Liberation Mono', Menlo,",
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    margin: 0,
    width: "100%",
    boxShadow: "none",
    resize: "none",
    lineHeight: 1.5,
    fontSize: "1rem",
    color: "#090909",
    borderWidth: "1px",
    "-webkit-appearance": "none",
    "&::placeholder": {
      wordSpacing: "0.375rem",
    },
  },
  searchResult: {
    position: "absolute",
    marginTop: "0.5rem",
    left: "calc(1rem * -1)",
    right: "calc(1rem * -1)",
    top: "calc(100% + 1rem)",
    backgroundColor: "#fff",
    color: "#090909",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%), 0 0 0 1px rgb(0 0 0 / 10%)",
    borderRadius: "0.375rem",
    zIndex: 400,
    padding: "0.25rem",
    fontSize: "1rem",
  },
  searchResultRow: {
    position: "relative",
    padding: "0.75rem",
    backgroundColor: "#0909090d",
    cursor: "pointer",
    color: "#242424",
  },
  clickableSearchResultRow: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    cursor: "pointer",
    top: 0,
    left: 0,
    zIndex: 10,
  },
  searchResultHeading: {
    padding: "0.75rem",
    fontSize: "1.125rem",
    borderBottom: "1px solid #d6d6d7",
  },
}));

export default useStyles;
