import { FC } from "react";
import { useTheme } from "@material-ui/styles";
import Meta from "../Meta";
import MDEditor from "../MDEditor";

import useStyles from "./styles";

const Form: FC<{ handleMDText: Function; mdText: string }> = ({
  handleMDText,
  mdText,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.Form}>
      <Meta />
      <MDEditor handleMDText={handleMDText} mdText={mdText} />
    </div>
  );
};

export default Form;
