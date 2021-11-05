import { FC, useState } from "react";
import Link from "next/link";

import { useTheme, Theme } from "@material-ui/core";
import { Link as MUILink } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

import Navlinks from "./Navlinks";
import SidebarList from "../SidebarList";
import useStyles from "./styles";

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
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.searchIcon_mobile}>
            <Link href="/search" passHref>
              <MUILink color="textSecondary">
                <SearchIcon />
              </MUILink>
            </Link>
          </div>
          <Drawer
            className={classes.drawerSideBar}
            anchor="left"
            open={state}
            onClose={toggleDrawer}
          >
            <SidebarList drawer />
          </Drawer>
          <Navlinks />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
