import { FC, useState } from "react";
import { useTheme } from "@material-ui/styles";
import Box from "@material-ui/core/Box";

import Form from "./component/Form";
import Header from "./component/Header";
import Preview from "./component/preview";

import useStyles from "./styles";

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

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  function handleChangeMD(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextareaValue(evt.target.value);
  }

  console.log("render");

  return (
    <div className={classes.ArticleForm}>
      <Header value={value} handleChange={handleChange} />
      <div className={classes.tapPanel}>
        <TabPanel value={value} index={0}>
          <Form handleMDText={handleChangeMD} mdText={textareaValue} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Preview mdText={textareaValue} />
        </TabPanel>
      </div>
    </div>
  );
};

export default ArticleForm;
