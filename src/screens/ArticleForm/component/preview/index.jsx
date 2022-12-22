import Image from 'next/image';
import { Typography, useTheme } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import CodeBlock from '../MDEditor/codeBlock';
import Tags from '@components/PostCard/Tags';
import { toBase64, shimmer } from '@helpers/image/shimmer';
import useStyles from './styles';
import { useContext } from 'react';
import { FormContext } from '@screens/ArticleForm/context/FormContext';

const Preview = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { title, coverImage, textareaValue, tags } = useContext(FormContext);

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
                objectFit="scale-down"
                alt={'Post cover'}
                priority
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(250, 105))}`}
              />
            )}
          </div>
          <div className={classes.articleTitle}>
            <Typography component={'h1'}>{title}</Typography>
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
            {textareaValue}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default Preview;
