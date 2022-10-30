import { useState, FC } from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { StyledGridContainer, StyledSideBar, StyledContent } from './styles';
import Header from './components/Header';
import SideBarLeft from './components/SideBarLeft';
import EmptyListMessage from './components/EmptyListMessage';
import ReadingListItemsContainer from './components/ReadingListItemsContainer';
import { useGetReadingListQuery } from '@redux/slices/api';
import { ReadingListType, TagType } from './type';

const ReadingList: FC<{}> = ({}) => {
  const { isError, isLoading, data } = useGetReadingListQuery('readinglist');

  let readingLists: ReadingListType[] = [];
  let tags: Array<string> = [];

  if (!isLoading) {
    let tagsArr = data.articles
      .map((item: ReadingListType) => item.tags)
      .flat(1)
      .map((item: TagType) => item.tag);

    tags = tagsArr.filter((item: string, id: number) => {
      return tagsArr.indexOf(item) == id;
    });

    readingLists = [...data.articles];
  }

  return (
    <StyledGridContainer container>
      <Header tags={tags} />
      <Hidden only={['xs', 'sm']}>
        <SideBarLeft tags={tags} />
      </Hidden>
      <Grid className="MainContent-container" item xs={12} sm={12} md={9} lg={9}>
        <StyledContent borderRadius="borderRadius">
          {readingLists.length > 0 ? (
            <ReadingListItemsContainer lists={readingLists} />
          ) : (
            <EmptyListMessage />
          )}
        </StyledContent>
      </Grid>
    </StyledGridContainer>
  );
};

export default ReadingList;
