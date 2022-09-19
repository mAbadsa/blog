import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import { useTheme } from '@material-ui/core';
import { Link as MUILink } from '@material-ui/core';

import useStyles from './styles';
import tagsType from '../../interface/Tags';

const Tags: FC<{ tags: tagsType[] }> = ({ tags }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const tagsElmts: ReactElement[] = tags.map(({ id, tag }) => {
    return (
      <Link href={`/t/${tag}`} passHref key={id}>
        <MUILink>
          <span>#</span>
          <span>{tag}</span>
        </MUILink>
      </Link>
    );
  });
  return <div className={classes.Tags}>{tagsElmts}</div>;
};

export default Tags;
