import React, { FC, useLayoutEffect, useState, useRef, useEffect } from 'react';
import { useTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { useMutation } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { uploadDraftArticle, updateArticle } from '../../services/ArticleForm';

import Form from './component/Form';
import Header from './component/Header';
import Preview from './component/preview';
import tagsProps from '../../components/interface/Tags';
import useStyles from './styles';
import Modal from '../../components/Modal';
import CloseDialog from '../../components/CloseFormDialog';
import Footer from './component/Footer';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

async function postArticle<T extends Object>(article: T) {
  const res: AxiosResponse = await axios.post('/api/articles', {
    data: article,
  });
  return res;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`form-tabpanel-${index}`}
      aria-labelledby={`form-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={0}>{children}</Box>}
    </div>
  );
}

const ArticleForm: FC<{ mode?: string; defaultData?: any }> = ({
  mode = 'new',
  defaultData = { cover_image: '', content: '', tags: '', title: '', slug: '' },
}) => {
  const { cover_image, content, tags: tagsList, title: defaultTitle, slug } = defaultData;

  const theme = useTheme();
  const classes = useStyles({ theme });
  const [value, setValue] = useState(0);
  const [toolPanelValue, setToolPanelValue] = useState<string>('');
  const [cursorPostion, setCursorPostion] = useState(0);
  const [textareaValue, setTextareaValue] = useState(content || '');
  const [tags, setTags] = useState<string[]>(tagsList?.split(',') || []);
  const [title, setTitle] = useState(defaultTitle || '');
  const [coverImage, setCoverImage] = useState<string>(cover_image || '');
  const [open, setOpen] = useState<boolean>(false);

  console.log({ defaultData });

  const articleMutate = useMutation((article: Object) => postArticle(article), {
    onSuccess: async (data: AxiosResponse) => {},
  });

  const updateArticleMutate = useMutation(
    (article: {
      coverImage: string | undefined;
      title: string;
      slug: string;
      tags: string[] | undefined;
      textareaValue: string | undefined;
    }) => updateArticle({ axios })(article),
    {
      onSuccess: async (data: AxiosResponse) => {},
    },
  );

  const draftArticleMutate = useMutation(
    (article: {
      coverImage: string | undefined;
      title: string;
      tags: string[] | undefined;
      textareaValue: string | undefined;
    }) => uploadDraftArticle({ axios })(article),
    {
      onSuccess: async (data: AxiosResponse) => {},
    },
  );

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  function handleChangeMD(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    setCursorPostion(evt.target.selectionEnd);
    evt.target.selectionEnd = evt.target.selectionEnd + toolPanelValue.length;
    setTextareaValue(evt.target.value);
    setToolPanelValue('');
  }

  function addToolPanelValue() {
    let leftText = textareaValue.slice(0, cursorPostion);
    let rightText = textareaValue.slice(cursorPostion);
    let textValue = leftText + toolPanelValue + rightText;
    setTextareaValue(textValue);
  }

  function setRef(ref: React.RefObject<HTMLTextAreaElement>) {
    ref.current?.focus();
  }

  useEffect(() => {
    addToolPanelValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toolPanelValue]);

  function passSelectedTags(t: Array<string>) {
    setTags(t);
  }

  function handleChangeTitle(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    setTitle(evt.target.value);
  }

  function articleCoverImage(image: string) {
    setCoverImage(image);
  }

  function handleCloseModal() {
    setOpen(false);
  }

  function handleOpenCloseDialog() {
    setOpen(true);
  }

  function handlePublishArticle() {
    const articlePayload = {
      coverImage,
      title,
      tags,
      textareaValue,
    };
    console.log({ articlePayload });
    articleMutate.mutate(articlePayload);
  }

  function handleUpdateArticle() {
    const articlePayload = {
      coverImage,
      title,
      slug,
      tags,
      textareaValue,
    };
    console.log({ articlePayload });
    updateArticleMutate.mutate(articlePayload);
  }

  function handleSaveDraft() {
    draftArticleMutate.mutate({
      coverImage,
      title,
      tags,
      textareaValue,
    });
  }

  return (
    <div className={classes.ArticleForm}>
      <Header value={value} handleChange={handleChange} handleClose={handleOpenCloseDialog} />
      <div className={classes.tapPanel}>
        <Modal open={open} handleClose={handleOpenCloseDialog}>
          <CloseDialog handleClose={handleCloseModal} />
        </Modal>
        <TabPanel value={value} index={0}>
          <Form
            articleCoverImage={articleCoverImage}
            handleMDText={handleChangeMD}
            mdText={textareaValue}
            passSelectedTags={passSelectedTags}
            selectedTags={tags || []}
            handleChangeTitle={handleChangeTitle}
            defaultTitle={title}
            defaultCoverImage={coverImage}
            setCursorPostion={setCursorPostion}
            setPanelValue={setToolPanelValue}
            setRef={setRef}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Preview
            coverImage={coverImage || ''}
            mdText={textareaValue}
            articleTitle={title}
            tags={tags || []}
          />
        </TabPanel>
      </div>
      <Footer
        handlePublishArticle={handlePublishArticle}
        handleSaveDraft={handleSaveDraft}
        handleUpdateArticle={handleUpdateArticle}
        mode={mode}
      />
    </div>
  );
};

export default ArticleForm;
