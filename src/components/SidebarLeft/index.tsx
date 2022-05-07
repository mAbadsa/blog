import React, { FC } from "react";
import Link from "next/link";

import { useTheme } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import { ExitToAppRounded } from "@material-ui/icons";

import Navlinks from "../Header/NavLinks/NavLinks";
import useStyles from "./styles";

const SidebarLeft: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const list = () => (
    <div className={classes.list}>
      <List>
        <Link href="/" passHref>
          <ListItem button>
            <ListItemIcon>
              <HomeRoundedIcon color="primary" />
            </ListItemIcon>
            <ListItemText className={classes.ListItemText} primary="Home" />
          </ListItem>
        </Link>
        <Link href="/api/auth/sign" passHref>
          <ListItem button>
            <ListItemIcon>
              <ContactMailRoundedIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              className={classes.ListItemText}
              primary="Sign In/Up"
            />
          </ListItem>
        </Link>
        <Link href="/dashboard" passHref>
          <ListItem button>
            <ListItemIcon>
              <DashboardRoundedIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              className={classes.ListItemText}
              primary="Dashboard"
            />
          </ListItem>
        </Link>
        <Link href="/signin" passHref>
          <ListItem button>
            <ListItemIcon>
              <ExitToAppRounded color="primary" />
            </ListItemIcon>
            <ListItemText className={classes.ListItemText} primary="Signin" />
          </ListItem>
        </Link>
        <Link href="/signup" passHref>
          <ListItem button>
            <ListItemIcon>
              <AccountBoxRoundedIcon color="primary" />
            </ListItemIcon>
            <ListItemText className={classes.ListItemText} primary="Signup" />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );

  return (
    <Paper className={classes.SidebarLeft} elevation={0}>
      <aside>{list()}</aside>
    </Paper>
  );
};

export default SidebarLeft;
