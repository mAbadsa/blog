import React, { useRef, useContext } from 'react';
import { useTheme } from '@material-ui/core';
import ToolPanel from './ToolPanel';
import useStyles from './styles';
import { FormContext } from '@screens/ArticleForm/context/FormContext';

const MDEditor = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const textareaRef = useRef();
  const { setCursorPostion, setToolPanelValue, textareaValue, setTextareaValue, toolPanelValue } =
    useContext(FormContext);

  function handleFocus(evt) {
    setCursorPostion(evt.target.selectionEnd);
    evt.target.style.height = 'auto';
    evt.target.style.height = evt.target.scrollHeight + 'px';
  }

  function handleChangeHeight(evt) {
    evt.target.style.height = 'auto';
    evt.target.style.height = evt.target.scrollHeight + 'px';
  }

  function handleChangeMD(evt) {
    setCursorPostion(evt.target.selectionEnd);
    evt.target.selectionEnd = evt.target.selectionEnd + toolPanelValue.length;
    setTextareaValue(evt.target.value);
    setToolPanelValue('');
  }

  function setRef(ref) {
    ref.current?.focus();
  }

  return (
    <div className={classes.root}>
      <ToolPanel
        setPanelValue={setToolPanelValue}
        setRef={setRef}
        textareaRef={textareaRef}
      ></ToolPanel>
      <div className={classes.MDEditor}>
        <textarea
          className={classes.textArea}
          aria-label="Post Content"
          placeholder="Write your post content here..."
          value={textareaValue}
          onChange={handleChangeMD}
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
