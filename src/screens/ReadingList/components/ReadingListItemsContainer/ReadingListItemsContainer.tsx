import { FC, useState, ReactElement, MouseEvent } from 'react';
import Link from 'next/link';
import { StyledContainer, StyledNavLink, StyledListItem } from './style';
import ReadingListItems from '../ReadingListItem';

interface ReadingListType {
  id: number;
  title: string;
  slug: string;
  author: string;
  avatarImage: string;
  createdAt: string;
  lastReading: string;
  isArchived: boolean;
  tags: Array<{ id: string; tag: string }>;
}

const ReadingListItemsContainer: FC<{ lists: Array<ReadingListType> }> = ({ lists }) => {
  const ReadingListElements: ReactElement[] = lists.map(({ id, ...reset }, idx) => {
    return <ReadingListItems key={id} {...reset} />;
  });
  return <StyledContainer container>{ReadingListElements}</StyledContainer>;
};

export default ReadingListItemsContainer;
