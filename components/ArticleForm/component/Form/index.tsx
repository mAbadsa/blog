import { FC } from "react";
import { useTheme } from "@material-ui/styles";
import Meta from "../Meta";

import useStyles from "./styles";

const ArticleForm: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.ArticleForm}>
      <Meta />
    </div>
  );
};

export default ArticleForm;
