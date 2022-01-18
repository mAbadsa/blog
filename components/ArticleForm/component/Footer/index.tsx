import { FC, MouseEventHandler } from "react";
import { useTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

const Footer: FC<{
  handlePublishArticle: MouseEventHandler<HTMLButtonElement>;
  handleSaveDraft: MouseEventHandler<HTMLButtonElement>;
}> = ({ handlePublishArticle, handleSaveDraft }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.Footer}>
      <Button
        className={classes.publish}
        tabIndex={1}
        onClick={handlePublishArticle}
      >
        Publish
      </Button>
      <Button
        className={classes.saveDraft}
        tabIndex={2}
        onClick={handleSaveDraft}
      >
        Save draft
      </Button>
    </div>
  );
};

export default Footer;
