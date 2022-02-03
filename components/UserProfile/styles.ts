import { Theme, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  UserProfile: {
    scrollMarginTop: "56px",
    minHeight: "16rem",
  },
  profile: {
    background: "linear-gradient(180deg, #000000 8rem, #00000000 8rem)",
  },
  layout: {
    paddingTop: "4rem",
    fontSize: "1rem",
    width: "100%",
    maxWidth: "1024px",
    margin: "0 auto",
    display: "grid",
    gap: "0.5rem",
    gridTemplateColumns: "100%",
    padding: "0.5rem",
  },
  headerTop: {
    position: "relative",
  },
  profileHeaderAvatar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "8rem",
    height: "8rem",
    padding: "0.5rem",
    backgroundColor: "#000000",
    borderRadius: "100%",
    verticalAlign: "middle",
  },
  profileHeaderAvatar_image: {
    borderRadius: "100%",
    width: "100%",
    height: "100%",
    display: "inline-block",
    verticalAlign: "bottom",
  },
  headerAction: {},
  [`@media (max-width: 768px)`]: {
    layout: {
      paddingTop: "2rem",
      padding: "0",
    },
  },
  profileHeader: {},
}));

export default useStyles;
