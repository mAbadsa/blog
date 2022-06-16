import { FC, MouseEventHandler } from 'react';
import { Typography, useTheme } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

const CloseDialog: FC<{
  handleClose: MouseEventHandler<HTMLAnchorElement>;
}> = ({ handleClose }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.CloseDialog}>
      <div className={classes.header}>
        <Typography component="h2">You have unsaved changes</Typography>
        <IconButton
          className={classes.closeForm}
          href={''}
          aria-label="close-article-editor"
          onClick={handleClose}
        >
          <Close aria-label="close" />
        </IconButton>
      </div>
      <div className={classes.dialogBody}>
        <Typography>
          You&apos;ve made changes to your post. Do you want to navigate to leave this page?
        </Typography>
        <div className={classes.dialogActions}>
          <Button className={classes.dialogLeaveBtn} variant="contained" href="/">
            Yes, leave the page
          </Button>
          <Button
            className={classes.dialogCancelBtn}
            variant="contained"
            onClick={handleClose}
            href={''}
          >
            No, keep editing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CloseDialog;
