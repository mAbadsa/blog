import React, { FC, useState } from "react";
import { useTheme } from "@material-ui/styles";
import Box from "@material-ui/core/Box";

import Form from "./component/Form";
import Header from "./component/Header";
import Preview from "./component/preview";
import tagsProps from "../interface/Tags";
import useStyles from "./styles";
import Modal from "../Modal";
import CloseDialog from "./component/CloseDialog";

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

const ArticleForm: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [value, setValue] = useState(0);
  const [textareaValue, setTextareaValue] = useState("");
  const [tags, setTags] = useState<string[]>();
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  function handleChangeMD(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextareaValue(evt.target.value);
  }

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

  return (
    <div className={classes.ArticleForm}>
      <Header
        value={value}
        handleChange={handleChange}
        handleClose={handleOpenCloseDialog}
      />
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
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Preview
            coverImage={coverImage || ""}
            mdText={textareaValue}
            articleTitle={title}
            tags={tags || []}
          />
        </TabPanel>
      </div>
    </div>
  );
};

export default ArticleForm;
