import React, { FC } from "react";
import Link from 'next/link';

import { useTheme } from "@material-ui/core";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import { ExitToAppRounded } from '@material-ui/icons';
import SVGIcons from '../SVG/SVGIcons';

import useStyles from "./styles";

const SidebarList: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div
      className={classes.root}
    >
      <List>
        <Link href="/" passHref>
          <ListItem className={classes.ListItem} button>
            <SVGIcons.Home />
            <ListItemText className={classes.ListItemText} primary="Home" />
          </ListItem>
        </Link>
        <Link href="/api/auth/sign" passHref>
          <ListItem className={classes.ListItem} button>
            <SVGIcons.Signin />
            <ListItemText className={classes.ListItemText} primary="Sign In/Up" />
          </ListItem>
        </Link>
        <Link href="/listings" passHref>
          <ListItem className={classes.ListItem} button>
            <SVGIcons.Listing />
            <ListItemText
              className={classes.ListItemText}
              primary="Listings"
            />
          </ListItem>
        </Link>
        <Link href="/podcasts" passHref>
          <ListItem className={classes.ListItem} button>
            <SVGIcons.Podcasts />
            <ListItemText className={classes.ListItemText} primary="Podcasts" />
          </ListItem>
        </Link>
      </List>
      <Link href="/videos" passHref>
        <ListItem className={classes.ListItem} button>
          <SVGIcons.Videos />
          <ListItemText className={classes.ListItemText} primary="Videos" />
        </ListItem>
      </Link>
      <Divider />
    </div>
  );
};

export default SidebarList;
