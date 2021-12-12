import { useTheme } from "@material-ui/core";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

import CodeBlock from "../MDEditor/codeBlock";

import useStyles from "./styles";

const Preview = ({ mdText }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <ReactMarkdown className={classes.Preview} components={CodeBlock} remarkPlugins={[remarkGfm]}>
      {mdText}
    </ReactMarkdown>
  );
};

export default Preview;
