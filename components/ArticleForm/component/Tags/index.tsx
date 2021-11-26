import { FC } from "react";
import { useTheme } from "@material-ui/core";
import useStyles from "./styles";

const Tags: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.Tags}>
      <input
        className={classes.tagsInput}
        type="text"
        aria-label="Post tags"
        placeholder={`Add up to 4 tags...`}
        autoComplete="off"
      />
    </div>
  );
};

export default Tags;
