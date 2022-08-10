import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '@material-ui/core';
import ToolPanel from './ToolPanel';
import useStyles from './styles';

const MDEditor = ({ handleMDText, mdText, setCursorPostion, setPanelValue, setRef }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const textareaRef = useRef();

  function handleFocus(evt) {
    setCursorPostion(evt.target.selectionEnd);
    evt.target.style.height = 'auto';
    evt.target.style.height = evt.target.scrollHeight + 'px';
  }

  function handleChangeHeight(evt) {
    evt.target.style.height = 'auto';
    evt.target.style.height = evt.target.scrollHeight + 'px';
  }

  return (
    <div className={classes.root}>
      <ToolPanel
        setPanelValue={setPanelValue}
        setRef={setRef}
        textareaRef={textareaRef}
      ></ToolPanel>
      <div className={classes.MDEditor}>
        <textarea
          className={classes.textArea}
          aria-label="Post Content"
          onChange={handleMDText}
          placeholder="Write your post content here..."
          value={mdText}
          onClick={handleFocus}
          onKeyDown={handleFocus}
          onKeyPress={handleChangeHeight}
          ref={textareaRef}
        ></textarea>
      </div>
    </div>
  );
};

export default MDEditor;
