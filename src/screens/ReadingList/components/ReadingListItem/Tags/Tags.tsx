import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import { StyledNavLink } from './styles';
import { TagType } from '../../../type';

const Tags: FC<{ tags: TagType[] }> = ({ tags }) => {
  const tagsElmts: ReactElement[] = tags.map(({ id, tag }) => {
    return (
      <Link href={`/t/${tag}`} passHref key={id}>
        <StyledNavLink underline="none" color="textSecondary" textSecondary>
          <span>#</span>
          <span>{tag}</span>
        </StyledNavLink>
      </Link>
    );
  });
  return <>{tagsElmts}</>;
};

export default Tags;
