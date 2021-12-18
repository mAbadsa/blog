import { ChangeEventHandler, FC } from "react";

import { useTheme } from "@material-ui/styles";
import UploadCoverImage from "../UploadCoverImage";
import Title from "../PostTitle";
import Tags from "../Tags";
import useStyles from "./styles";

const Meta: FC<{
  passSelectedTags: Function;
  handleChangeTitle: ChangeEventHandler<HTMLTextAreaElement>;
  selectedTags: Array<string>;
  defaultTitle: string;
}> = ({ passSelectedTags, selectedTags, handleChangeTitle, defaultTitle }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.Meta}>
      <UploadCoverImage />
      <Title
        handleChangeTitle={handleChangeTitle}
        defaultTitle={defaultTitle}
      />
      <Tags passSelectedTags={passSelectedTags} tags={selectedTags} />
    </div>
  );
};

export default Meta;
