import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useTheme, Theme } from "@material-ui/core";
import { Link as MUILink } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

import Navlinks from "./Navlinks";
import SidebarList from "../SidebarList";
import useStyles from "./styles";

const Header: FC<{ display: Boolean }> = ({ display }) => {
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
    <div className={`${classes.Header} ${display && classes.hidden}`}>
      <AppBar className={classes.appBar} position="static">
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
            <Image
              src={"/assets/images/logo.png"}
              alt="logo"
              width="50"
              height="40"
            />
          </IconButton>
          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton className={classes.searchIcon}>
              <SearchIcon />
            </IconButton>
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
