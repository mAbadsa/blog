import { FC } from "react";

import { useTheme } from "@material-ui/core";

import useStyles from "./styles";

const PostTitle: FC = () => {
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
      />
    </div>
  );
};

export default PostTitle;
