import { FC, useState, ReactElement, MouseEvent } from 'react';
import Link from 'next/link';
import { StyledContainer, StyledNavLink, StyledListItem } from './style';
import ReadingListItems from '../ReadingListItem';
import { ReadingListType } from '../../type';

const ReadingListItemsContainer: FC<{ lists: Array<ReadingListType> }> = ({ lists }) => {
  const ReadingListElements: ReactElement[] = lists.map(({ readingListId, ...reset }, idx) => {
    return <ReadingListItems key={readingListId} {...reset} />;
  });
  return <StyledContainer container>{ReadingListElements}</StyledContainer>;
};

export default ReadingListItemsContainer;
