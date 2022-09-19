import { ChangeEventHandler, FC, memo } from 'react';
import { useTheme } from '@material-ui/styles';
import Meta from '../Meta';
import MDEditor from '../MDEditor';

import useStyles from './styles';

const Form: FC<{
  handleMDText: React.ChangeEventHandler<HTMLTextAreaElement>;
  passSelectedTags: Function;
  handleChangeTitle: ChangeEventHandler<HTMLTextAreaElement>;
  defaultTitle: string;
  mdText: string;
  selectedTags: Array<string>;
  articleCoverImage: Function;
  defaultCoverImage: string;
  setCursorPostion: React.Dispatch<React.SetStateAction<number>>;
  setPanelValue: React.Dispatch<React.SetStateAction<string>>;
  setRef: (ref: React.RefObject<HTMLTextAreaElement>) => void;
}> = ({
  handleMDText,
  mdText,
  passSelectedTags,
  selectedTags,
  handleChangeTitle,
  defaultTitle,
  articleCoverImage,
  defaultCoverImage,
  setCursorPostion,
  setPanelValue,
  setRef,
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
      <MDEditor
        handleMDText={handleMDText}
        mdText={mdText}
        setCursorPostion={setCursorPostion}
        setPanelValue={setPanelValue}
        setRef={setRef}
      />
    </div>
  );
};

export default memo(Form);
