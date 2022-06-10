import React, { useRef, useEffect } from 'react';
import { useTheme } from '@material-ui/core';
import ToolPanel from './ToolPanel';
import useStyles from './styles';

const MDEditor = ({ handleMDText, mdText, setCursorPostion, setPanelValue, setRef }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const textareaRef = useRef();

  function handleFocus(evt) {
    console.log({ sPostion: evt.target.selectionEnd });
    setCursorPostion(evt.target.selectionEnd);
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
          ref={textareaRef}
        ></textarea>
      </div>
    </div>
  );
};

export default MDEditor;
