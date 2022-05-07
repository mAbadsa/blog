import { ChangeEventHandler, FC } from "react";
import { useTheme } from "@material-ui/styles";
import Meta from "../Meta";
import MDEditor from "../MDEditor";

import useStyles from "./styles";

const Form: FC<{
  handleMDText: Function;
  passSelectedTags: Function;
  handleChangeTitle: ChangeEventHandler<HTMLTextAreaElement>;
  defaultTitle: string;
  mdText: string;
  selectedTags: Array<string>;
  articleCoverImage: Function;
  defaultCoverImage: string;
}> = ({
  handleMDText,
  mdText,
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
    <div className={classes.Form}>
      <Meta
        passSelectedTags={passSelectedTags}
        selectedTags={selectedTags}
        handleChangeTitle={handleChangeTitle}
        defaultTitle={defaultTitle}
        articleCoverImage={articleCoverImage}
        defaultCoverImage={defaultCoverImage}
      />
      <MDEditor handleMDText={handleMDText} mdText={mdText} />
    </div>
  );
};

export default Form;
