import React, { FC, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import {
  usePostArticleMutation,
  useUpdateArticleMutation,
  usePostDraftArticleMutation,
} from '@redux/index';
import { FormContext } from './context/FormContext';

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

  const formContext = useContext(FormContext);
  console.log({ formContext });
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

  function addToolPanelValue() {
    let leftText = textareaValue.slice(0, cursorPostion);
    let rightText = textareaValue.slice(cursorPostion);
    let textValue = leftText + toolPanelValue + rightText;
    setTextareaValue(textValue);
  }

  useEffect(() => {
    addToolPanelValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toolPanelValue]);

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
    <FormContext.Provider
      value={{
        title,
        coverImage,
        tags,
        textareaValue,
        toolPanelValue,
        setTitle,
        setTags,
        setCoverImage,
        setTextareaValue,
        setToolPanelValue,
        setCursorPostion,
      }}
    >
      <div className={classes.ArticleForm}>
        <Header value={value} handleChange={handleChange} handleClose={handleOpenCloseDialog} />
        <div className={classes.tapPanel}>
          <Modal open={open} handleClose={handleOpenCloseDialog}>
            <CloseDialog handleClose={handleCloseModal} />
          </Modal>
          <TabPanel value={value} index={0}>
            <Form />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Preview />
          </TabPanel>
        </div>
        <Footer
          handlePublishArticle={handlePublishArticle}
          handleSaveDraft={handleSaveDraft}
          handleUpdateArticle={handleUpdateArticle}
          mode={mode}
        />
      </div>
    </FormContext.Provider>
  );
};

export default ArticleForm;
