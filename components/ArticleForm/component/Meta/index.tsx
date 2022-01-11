import { ChangeEventHandler, FC } from "react";

import { useTheme } from "@material-ui/styles";
import UploadCoverImage from "../UploadCoverImage";
import Title from "../PostTitle";
import Tags from "../Tags";
import useStyles from "./styles";

const Meta: FC<{
  passSelectedTags: Function;
  handleChangeTitle: ChangeEventHandler<HTMLTextAreaElement>;
  articleCoverImage: Function;
  selectedTags: Array<string>;
  defaultTitle: string;
  defaultCoverImage: string;
}> = ({
  passSelectedTags,
  selectedTags,
  handleChangeTitle,
  defaultTitle,
  articleCoverImage,
  defaultCoverImage,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.Meta}>
      <UploadCoverImage
        articleCoverImage={articleCoverImage}
        defaultCoverImage={defaultCoverImage}
      />
      <Title
        handleChangeTitle={handleChangeTitle}
        defaultTitle={defaultTitle}
      />
      <Tags passSelectedTags={passSelectedTags} tags={selectedTags} />
    </div>
  );
};

export default Meta;
