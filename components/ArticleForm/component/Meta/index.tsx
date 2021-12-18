import { FC } from "react";

import { useTheme } from "@material-ui/styles";
import UploadCoverImage from "../UploadCoverImage";
import Title from "../PostTitle";
import Tags from "../Tags";
import useStyles from "./styles";

const Meta: FC<{
  passSelectedTags: Function;
  selectedTags: Array<string>;
}> = ({ passSelectedTags, selectedTags }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.Meta}>
      <UploadCoverImage />
      <Title />
      <Tags passSelectedTags={passSelectedTags} tags={selectedTags} />
    </div>
  );
};

export default Meta;
