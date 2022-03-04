import Image from "next/image";
import { Typography, useTheme } from "@material-ui/core";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import CodeBlock from "../MDEditor/codeBlock";
import Tags from "../../../PostCard/Tags";
import useStyles from "./styles";

const Preview = ({ mdText, articleTitle, tags, coverImage }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  let _tags = tags.map((t, idx) => ({
    id: `${t}_${idx}`,
    tag: t,
  }));

  return (
    <div className={classes.Preview}>
      <article className={classes.article}>
        <header>
          <div className={classes.cover}>
            {coverImage && (
              <Image
                className={classes.coverImage}
                loader={() => coverImage}
                src={`${coverImage}`}
                width={250}
                height={105}
                layout="fill"
                objectFit="cover"
                alt={"Post cover"}
              />
            )}
          </div>
          <div className={classes.articleTitle}>
            <Typography component={"h1"}>{articleTitle}</Typography>
            <div className={classes.tags}></div>
            <Tags tags={_tags} />
          </div>
        </header>
        <div className={classes.articleMain}>
          <ReactMarkdown
            className={classes.markDown}
            components={CodeBlock}
            remarkPlugins={[remarkGfm]}
          >
            {mdText}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default Preview;
