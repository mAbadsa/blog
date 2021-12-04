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
}));

export default useStyles;
