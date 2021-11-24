import { FC } from "react";
import { useTheme } from "@material-ui/styles";
import Meta from "../Meta";

import useStyles from "./styles";

const Form: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.Form}>
      <Meta />
    </div>
  );
};

export default Form;
