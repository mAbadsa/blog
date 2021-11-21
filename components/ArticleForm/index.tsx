import { FC } from "react";
import { useTheme } from "@material-ui/styles";
import Form from "./component/Form";
import Header from "./component/Header";

import useStyles from "./styles";

const ArticleForm: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.ArticleForm}>
      <Header />
      <Form />
    </div>
  );
};

export default ArticleForm;
