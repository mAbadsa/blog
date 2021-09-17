import { FC, useState } from 'react';

import Link from 'next/link';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import { ExitToAppRounded } from '@material-ui/icons';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import useStyles from './styles';

import Navlinks from './Navlinks';

const Header: FC = () => {
  const classes = useStyles();
  const [state, setState] = useState<boolean>(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState(!state);
  }

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
          <Link href="/" passHref>
            <ListItem button >
              <ListItemIcon><HomeRoundedIcon color="primary" /></ListItemIcon>
              <ListItemText className={classes.ListItemText} primary="Blogs" />
            </ListItem>
          </Link>
          <Link href="/contact" passHref>
            <ListItem button>
              <ListItemIcon><ContactMailRoundedIcon color="primary" /></ListItemIcon>
              <ListItemText className={classes.ListItemText} primary="Contact" />
            </ListItem>
          </Link>
          <Link href="/dashboard" passHref>
            <ListItem button>
              <ListItemIcon><DashboardRoundedIcon color="primary" /></ListItemIcon>
              <ListItemText className={classes.ListItemText} primary="Dashboard" />
            </ListItem>
          </Link>
          <Link href="/signin" passHref>
            <ListItem button>
              <ListItemIcon><ExitToAppRounded color="primary" /></ListItemIcon>
              <ListItemText className={classes.ListItemText} primary="Signin" />
            </ListItem>
          </Link>
          <Link href="/signup" passHref>
            <ListItem button>
              <ListItemIcon><AccountBoxRoundedIcon color="primary" /></ListItemIcon>
              <ListItemText className={classes.ListItemText} primary="Signup" />
            </ListItem>
          </Link>
      </List>
      <Divider />
    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Blog
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Drawer anchor="left" open={state} onClose={toggleDrawer}>
            {list()}
          </Drawer>
          <Navlinks />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
