import { FC, MouseEventHandler } from 'react';
import { useTheme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const Footer: FC<{
  mode: string;
  handlePublishArticle: MouseEventHandler<HTMLButtonElement>;
  handleSaveDraft: MouseEventHandler<HTMLButtonElement>;
  handleUpdateArticle: MouseEventHandler<HTMLButtonElement>;
}> = ({ mode, handlePublishArticle, handleSaveDraft, handleUpdateArticle }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.Footer}>
      {mode === 'edit' ? (
        <Button
          className={classes.publish}
          variant="contained"
          color="primary"
          tabIndex={0}
          onClick={handleUpdateArticle}
          disableElevation
        >
          Update
        </Button>
      ) : (
        <Button
          className={classes.publish}
          variant="contained"
          color="primary"
          tabIndex={0}
          onClick={handlePublishArticle}
          disableElevation
        >
          Publish
        </Button>
      )}
      <Button
        className={classes.saveDraft}
        variant="text"
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
