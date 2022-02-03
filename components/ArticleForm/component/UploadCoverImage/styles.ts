import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  UploadCoverImage: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: "1.25rem",
    backgroundColor: "white",
  },
  coverImage: {
    borderRadius: "0.375rem",
    marginRight: theme.spacing(2),
  },
  SpinnerBox: {
    minWidth: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Spinner: {
    marginRight: "0.275rem",
  },
  buttonBox: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  selectButton: {
    backgroundColor: "transparent !important",
    borderRadius: "0.375rem !important",
    border: "2px solid #d6d6d7 !important",
    fontSize: "1rem !important",
    fontWeight: 400,
    boxShadow: "0 0 1px #000000d5",
    textTransform: "none",
    "& span.MuiTouchRipple-root": {
      backgroundColor: "transparent",
    },
    "&:hover": {
      boxShadow: "0 0 1px #000000d5",
    },
  },
  removeButton: {
    fontWeight: 400,
    padding: "0.5rem 1rem",
    color: "#dc1818",
    fontSize: "1rem",
    textTransform: "none",
  },
}));

export default useStyles;
