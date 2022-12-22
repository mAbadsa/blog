import { useContext, FC } from 'react';

import { useTheme } from '@material-ui/core';

import useStyles from './styles';
import { FormContext } from '@screens/ArticleForm/context/FormContext';
import { FormContextType } from '@screens/ArticleForm/types';

const PostTitle: FC = () => {
  const { setTitle, title } = useContext<FormContextType>(FormContext);
  function handleChangeTitle(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    setTitle(evt.target.value);
  }

  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.PostTitle}>
      <textarea
        className={classes.textArea}
        aria-label="Post Title"
        placeholder="New post title here..."
        autoComplete="off"
        autoFocus
        value={title}
        onChange={handleChangeTitle}
      />
    </div>
  );
};

export default PostTitle;
