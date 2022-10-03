import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core';
import SidebarList from '../../components/SidebarList';
import FeedTabs from './Tabs';
import Additional from '../../components/Additional';
import { useUser } from '@auth0/nextjs-auth0';

import useStyles from './styles';
import { useGetUserProfileQuery, useGetArtcilesQuery } from '../../redux/slices/api';
import { getUserAuth } from '../../redux/slices/authSlice';

const Home: FC = () => {
  const [drawer, setDrawer] = useState(false);
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { user, isLoading: _isLoading, error } = useUser();
  const { isLoading, data } = useGetUserProfileQuery(user?.nickname as String);
  const dispacth = useDispatch();
  if (!isLoading && user && data.data) {
    dispacth(
      getUserAuth({
        isAuth: true,
        userData: {
          user_id: data.id,
          username: data.username,
        },
      }),
    );
  }

  if (!isLoading && !user) {
    dispacth(
      getUserAuth({
        isAuth: false,
        userData: {
          user_id: undefined,
          username: undefined,
        },
      }),
    );
  }

  function handleCloseSideBar() {
    setDrawer(!drawer);
  }

  return (
    <Container className={classes.Home} maxWidth={'xl'}>
      <Grid className={classes.mainGrid} container spacing={0}>
        <div className={classes.sidebar}>
          <SidebarList drawer={drawer} closeSideBar={handleCloseSideBar} />
        </div>
        <div className={classes.mainFeed}>
          <div>
            <FeedTabs />
          </div>
        </div>
        <div className={classes.rightSidebar}>
          <Additional />
        </div>
      </Grid>
    </Container>
  );
};

export default Home;
