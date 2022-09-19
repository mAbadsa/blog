import { FC, useState } from 'react';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';

import { useTheme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';

import Navlinks from './NavLinks/NavLinks';
import Button from '../Button';
import SidebarList from '../SidebarList';
import useStyles from './styles';
import SVGIcons from '../SVG/SVGIcons';

const Header: FC<{ display: Boolean }> = ({ display }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [state, setState] = useState<boolean>(false);
  const { user, isLoading, error } = useUser();

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState(!state);
  };
  return (
    <div className={`${classes.Header} ${display && classes.hidden}`}>
      <AppBar className={classes.appBar} position="sticky" elevation={1}>
        <Toolbar className={classes.toobar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <IconButton href="/" className={classes.title}>
            <Image src={'/assets/images/logo.png'} alt="logo" width="50" height="40" />
          </IconButton>
          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <Button className={classes.searchIcon} variant="text" color="primary" withIcon>
              <SVGIcons.Lens />
            </Button>
          </div>
          <Drawer
            className={classes.drawerSideBar}
            anchor="left"
            open={state}
            onClose={toggleDrawer}
          >
            <SidebarList drawer closeSideBar={toggleDrawer} />
          </Drawer>
          <Navlinks user={user} isLoading={isLoading} error={error} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
