import { FC } from "react";
import { useTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

const Footer: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.Footer}>
      <Button className={classes.publish}>Publish</Button>
      <Button className={classes.saveDraft}>Save draft</Button>
    </div>
  );
};

export default Footer;
