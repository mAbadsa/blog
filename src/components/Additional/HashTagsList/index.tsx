import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { useTheme, Link as MUILink } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import HashTagCard from '@components/Additional/HashTagsList/HashTagCard';
import HashTagsListProps from '@components/interface/HashTagsList';
import useStyles from './styles';

const HashTagsList: FC<HashTagsListProps> = ({ title, articles }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const HashTagCards: Array<ReactElement> = articles.map(
    ({ id, title: _title, commentsNo, url }) => (
      <HashTagCard key={id} title={_title} commentsNo={commentsNo} url={url} />
    ),
  );

  return (
    <section className={classes.HashTagsList}>
      <header>
        <Typography className={classes.title} variant="h3">
          <Link href="/t/news" passHref>
            <MUILink>#{title}</MUILink>
          </Link>
        </Typography>
      </header>
      <div>{HashTagCards}</div>
    </section>
  );
};

export default HashTagsList;
