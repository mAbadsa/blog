import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core';
import SidebarList from '@components/SidebarList';
import FeedTabs from './Tabs';
import Additional from '@components/Additional';
import { useGetUserProfileQuery } from '@redux/index';
import { getUserAuth } from '@redux/slices/authSlice';

import useStyles from './styles';

const PrivateHome: FC<{ username: string }> = ({ username }) => {
  const [drawer, setDrawer] = useState(false);
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { isLoading, data } = useGetUserProfileQuery(username);
  const dispatch = useDispatch();

  if (username && !isLoading && data !== undefined) {
    dispatch(
      getUserAuth({
        isAuth: true,
        userData: {
          user_id: data.data.id,
          username: username,
        },
      }),
    );
  }

  if (isLoading && !username) {
    dispatch(
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

export default PrivateHome;
