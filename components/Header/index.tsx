import { FC, useState } from "react";

import styled from 'styled-components';
import { useTheme, Theme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Close from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';

import Navlinks from "./Navlinks";
import SidebarList from "../SidebarList";
import useStyles from "./styles";

const DrawerHeader = styled('div')(({}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '8px',
  justifyContent: 'space-between',
  '& h2': {
    fontWeight: 'bold',
    fontSize: '1.125rem',
  },
}));

const Header: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [state, setState] = useState<boolean>(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setState(!state);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Blog
          </Typography>
          <Drawer anchor="left" open={state} onClose={toggleDrawer}>
            <DrawerHeader>
              <Typography variant="h2">Blog Community</Typography>
              <IconButton onClick={toggleDrawer}>
                <Close />
              </IconButton>
            </DrawerHeader>
            <Divider />
            <div className={classes.list} role="presentation">
              <SidebarList drawer />
            </div>
          </Drawer>
          <Navlinks />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
