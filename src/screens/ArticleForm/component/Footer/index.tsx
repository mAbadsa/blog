import { FC, MouseEventHandler } from 'react';
import { useTheme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

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
        variant="text"
        color="primary"
        tabIndex={0}
        onClick={handlePublishArticle}
      >
        Publish
      </Button>
      <Button
        // className={classes.saveDraft}
        variant="contained"
        color="primary"
        tabIndex={0}
        onClick={handleSaveDraft}
        disableElevation
      >
        Save draft
      </Button>
    </div>
  );
};

export default Footer;
