import { FC } from "react";
import { useTheme } from "@material-ui/styles";
import Meta from "../Meta";
import MDEditor from "../MDEditor";

import useStyles from "./styles";

const Form: FC<{
  handleMDText: Function;
  passSelectedTags: Function;
  mdText: string;
  selectedTags: Array<string>;
}> = ({ handleMDText, mdText, passSelectedTags, selectedTags }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.Form}>
      <Meta passSelectedTags={passSelectedTags} selectedTags={selectedTags} />
      <MDEditor handleMDText={handleMDText} mdText={mdText} />
    </div>
  );
};

export default Form;
