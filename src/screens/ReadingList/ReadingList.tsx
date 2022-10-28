import { FC } from 'react';
import { Grid, Hidden, Typography } from '@material-ui/core';
import { StyledGridContainer, StyledSideBar, StyledContent } from './styles';
import Header from './components/Header';
import SideBarLeft from './components/SideBarLeft';
import EmptyListMessage from './components/EmptyListMessage';
import ReadingListItemsContainer from './components/ReadingListItemsContainer';

const ReadingList: FC<{}> = ({}) => {
  const ReadingLists = [
    {
      id: 1,
      title: 'Javascript Eventloop',
      slug: 'javascript-eventloop-a52f',
      avatarImage: 'https://i.pravatar.cc/32',
      author: 'Muhammad',
      createdAt: '2022-01-30 15:58:47.656442+02',
      lastReading: '2022-01-30 15:58:47.656442+02',
      isArchived: false,
      tags: [
        { id: '1', tag: 'aws' },
        { id: '2', tag: 'cloud' },
        { id: '3', tag: 'devops' },
      ],
    },
    {
      id: 3,
      title: 'Map vs Filter',
      slug: 'map-vs-filter-0c92',
      avatarImage: 'https://i.pravatar.cc/32',
      author: 'moh223',
      createdAt: '2022-01-30 15:58:47.656442+02',
      lastReading: '2022-01-30 15:58:47.656442+02',
      isArchived: false,
      tags: [
        { id: '1', tag: 'aws' },
        { id: '2', tag: 'cloud' },
        { id: '3', tag: 'devops' },
      ],
    },
    {
      id: 7,
      title: 'Observable vs async/wait',
      slug: 'observable-vs-async/wait-4b00',
      avatarImage: 'https://i.pravatar.cc/32',
      author: 'moh223',
      createdAt: '2022-01-30 15:58:47.656442+02',
      lastReading: '2022-01-30 15:58:47.656442+02',
      isArchived: false,
      tags: [
        { id: '1', tag: 'aws' },
        { id: '2', tag: 'cloud' },
        { id: '3', tag: 'devops' },
      ],
    },
  ];
  return (
    <StyledGridContainer container>
      <Header tags={['javascript', 'css', 'react', 'aws']} />
      <Hidden only={['xs', 'sm']}>
        <SideBarLeft tags={['javascript', 'css', 'react', 'aws']} />
      </Hidden>
      <Grid className="MainContent-container" item xs={12} sm={12} md={9} lg={9}>
        <StyledContent borderRadius="borderRadius">
          {ReadingLists.length > 0 ? (
            <ReadingListItemsContainer lists={ReadingLists} />
          ) : (
            <EmptyListMessage />
          )}
        </StyledContent>
      </Grid>
    </StyledGridContainer>
  );
};

export default ReadingList;
