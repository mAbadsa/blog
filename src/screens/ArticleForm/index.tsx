import React, { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import {
  usePostArticleMutation,
  useUpdateArticleMutation,
  usePostDraftArticleMutation,
} from '@redux/index';

import Form from './component/Form';
import Header from './component/Header';
import Preview from './component/preview';
import useStyles from './styles';
import Modal from '@components/Modal';
import CloseDialog from '@components/CloseFormDialog';
import Footer from './component/Footer';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
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
  const router = useRouter();

  const [postArticle] = usePostArticleMutation();
  const [updateArticle] = useUpdateArticleMutation();
  const [postDraftArticle] = usePostDraftArticleMutation();

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

  async function handlePublishArticle() {
    const articlePayload = {
      coverImage,
      title,
      tags,
      textareaValue,
    };
    const res = await postArticle(articlePayload).unwrap();
    if (res.statusCode === 201) {
      resetForm();
      router.push('/');
    }
  }

  async function handleUpdateArticle() {
    const articlePayload = {
      coverImage,
      title,
      slug,
      tags,
      textareaValue,
    };
    console.log({ articlePayload });
    const res = await updateArticle(articlePayload).unwrap();
    if (res.statusCode === 200) {
      resetForm();
      router.push('/');
    }
  }

  async function handleSaveDraft() {
    const res = await postDraftArticle({
      coverImage,
      title,
      tags,
      textareaValue,
    }).unwrap();
    if (res.statusCode === 201) {
      resetForm();
      router.push('/');
    }
  }

  function resetForm() {
    setCoverImage('');
    setTitle('');
    setTags([]);
    setTextareaValue('');
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
