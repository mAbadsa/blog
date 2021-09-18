import React, { FC } from "react";
import Link from "next/link";

import { Typography, useTheme } from "@material-ui/core";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SVGIcons from "../SVG/SVGIcons";

import SidebareListProps from '../interface/SidebarList';
import useStyles from "./styles";

const SidebarList: FC<SidebareListProps> = ({ drawer }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={`${classes.root} ${!drawer && classes.hidden}`}>
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
            <ListItemText
              className={classes.ListItemText}
              primary="Sign In/Up"
            />
          </ListItem>
        </Link>
        <Link href="/listings" passHref>
          <ListItem className={classes.ListItem} button>
            <SVGIcons.Listing />
            <ListItemText className={classes.ListItemText} primary="Listings" />
          </ListItem>
        </Link>
        <Link href="/podcasts" passHref>
          <ListItem className={classes.ListItem} button>
            <SVGIcons.Podcasts />
            <ListItemText className={classes.ListItemText} primary="Podcasts" />
          </ListItem>
        </Link>
        <Link href="/videos" passHref>
          <ListItem className={classes.ListItem} button>
            <SVGIcons.Videos />
            <ListItemText className={classes.ListItemText} primary="Videos" />
          </ListItem>
        </Link>
        <Link href="/tags" passHref>
          <ListItem className={classes.ListItem} button>
            <SVGIcons.Tags />
            <ListItemText className={classes.ListItemText} primary="Tags" />
          </ListItem>
        </Link>
        <Link href="/faq" passHref>
          <ListItem className={classes.ListItem} button>
            <SVGIcons.FAQ />
            <ListItemText className={classes.ListItemText} primary="FAQ" />
          </ListItem>
        </Link>
        <Link href="/devshop" passHref>
          <ListItem className={classes.ListItem} button>
            <SVGIcons.DEVShop />
            <ListItemText className={classes.ListItemText} primary="DEVShop" />
          </ListItem>
        </Link>
        <Link href="/sponser" passHref>
          <ListItem className={classes.ListItem} button>
            <SVGIcons.Sponser />
            <ListItemText className={classes.ListItemText} primary="Sponser" />
          </ListItem>
        </Link>
        <Link href="/about" passHref>
          <ListItem className={classes.ListItem} button>
            <SVGIcons.About />
            <ListItemText className={classes.ListItemText} primary="About" />
          </ListItem>
        </Link>
        <Link href="/contact" passHref>
          <ListItem className={classes.ListItem} button>
            <SVGIcons.Contact />
            <ListItemText className={classes.ListItemText} primary="Contact" />
          </ListItem>
        </Link>
      </List>
      {/* Other list */}
      <List>
        <Typography className={classes.listTitle} variant="h2">Other</Typography>
        <Link href="/code-of-conduct" passHref>
          <ListItem className={classes.ListItem} button>
            <SVGIcons.CodeOfConduct />
            <ListItemText
              className={classes.ListItemText}
              primary="Code of Conduct"
            />
          </ListItem>
        </Link>
        <Link href="/privacy" passHref>
          <ListItem className={classes.ListItem} button>
            <SVGIcons.PrivacyPolicy />
            <ListItemText
              className={classes.ListItemText}
              primary="Privacy Policy"
            />
          </ListItem>
        </Link>
        <Link href="/terms" passHref>
          <ListItem className={classes.ListItem} button>
            <SVGIcons.TermsOfUse />
            <ListItemText
              className={classes.ListItemText}
              primary="Terms of use"
            />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );
};

export default SidebarList;
