import React, { useState } from 'react';
import { useTheme } from '@material-ui/core';
import ToolPanel from './ToolPanel';
import useStyles from './styles';

const MDEditor = ({ handleMDText, mdText }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.MDEditor}>
      <ToolPanel></ToolPanel>
      <textarea
        className={classes.textArea}
        aria-label="Post Content"
        onChange={handleMDText}
        placeholder="Write your post content here..."
        value={mdText}
      ></textarea>
    </div>
  );
};

export default MDEditor;
