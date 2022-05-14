import React, { FC, useState } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core';
import SidebarList from '../../components/SidebarList';
import FeedTabs from './Tabs';
import Additional from '../../components/Additional';

import useStyles from './styles';

const Home: FC = () => {
  const [drawer, setDrawer] = useState(false);
  const theme = useTheme();
  const classes = useStyles({ theme });
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
