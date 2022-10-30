import { FC, useState, ReactElement, MouseEvent } from 'react';
import Link from 'next/link';
import List from '@material-ui/core/List';
import { StyledSideBar, StyledNavLink, StyledListItem } from './style';
import { TagType } from '../../../type';

const TagListItem: FC<{
  id: number;
  tag: string;
  activeLink: number;
  handleLinkClick: (evt: MouseEvent<HTMLAnchorElement>, id: number) => void;
}> = ({ id, tag, activeLink, handleLinkClick }) => {
  return (
    <StyledListItem>
      <Link href={`/t/${tag}`} passHref>
        <StyledNavLink
          className={activeLink === id ? 'current' : ''}
          textPrimary
          color="secondary"
          onClick={(evt: MouseEvent<HTMLAnchorElement>) => handleLinkClick(evt, id)}
        >
          #{tag}
        </StyledNavLink>
      </Link>
    </StyledListItem>
  );
};

export default TagListItem;
