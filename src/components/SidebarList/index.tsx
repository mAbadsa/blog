import React, { FC, KeyboardEvent, MouseEvent } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

import { Typography, useTheme } from "@material-ui/core";
import List from "@material-ui/core/List";
import Button from "../Button";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SVGIcons from "../SVG/SVGIcons";
import Promotion from "../Promotion";

import SidebareListProps from "../interface/SidebarList";
import useStyles from "./styles";

const SidebarList: FC<SidebareListProps> = ({ drawer, closeSideBar }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { user, isLoading } = useUser();

  return (
    <>
      {drawer && (
        <header className={classes.hamburger__content__header}>
          <Typography variant="h6">DEV Community</Typography>
          <Button
            variant="text"
            color="primary"
            onClick={(e: KeyboardEvent | MouseEvent) => closeSideBar(e)}
          >
            <SVGIcons.Close />
          </Button>
        </header>
      )}
      <div className={`${classes.SidebarList} ${!drawer && classes.hidden}`}>
        {!isLoading && !user && <Promotion.CreateAccount />}
        <List>
          <Link href="/" passHref>
            <ListItem className={classes.ListItem} button>
              <SVGIcons.Home />
              <ListItemText className={classes.listItemText} primary="Home" />
            </ListItem>
          </Link>
          <Link href="/api/auth/sign" passHref>
            <ListItem className={classes.ListItem} button>
              <SVGIcons.Signin />
              <ListItemText
                className={classes.listItemText}
                primary="Sign In/Up"
              />
            </ListItem>
          </Link>
          <Link href="/listings" passHref>
            <ListItem className={classes.ListItem} button>
              <SVGIcons.Listing />
              <ListItemText
                className={classes.listItemText}
                primary="Listings"
              />
            </ListItem>
          </Link>
          <Link href="/podcasts" passHref>
            <ListItem className={classes.ListItem} button>
              <SVGIcons.Podcasts />
              <ListItemText
                className={classes.listItemText}
                primary="Podcasts"
              />
            </ListItem>
          </Link>
          <Link href="/videos" passHref>
            <ListItem className={classes.ListItem} button>
              <SVGIcons.Videos />
              <ListItemText className={classes.listItemText} primary="Videos" />
            </ListItem>
          </Link>
          <Link href="/tags" passHref>
            <ListItem className={classes.ListItem} button>
              <SVGIcons.Tags />
              <ListItemText className={classes.listItemText} primary="Tags" />
            </ListItem>
          </Link>
          <Link href="/faq" passHref>
            <ListItem className={classes.ListItem} button>
              <SVGIcons.FAQ />
              <ListItemText className={classes.listItemText} primary="FAQ" />
            </ListItem>
          </Link>
          <Link href="/devshop" passHref>
            <ListItem className={classes.ListItem} button>
              <SVGIcons.DEVShop />
              <ListItemText
                className={classes.listItemText}
                primary="DEVShop"
              />
            </ListItem>
          </Link>
          <Link href="/sponser" passHref>
            <ListItem className={classes.ListItem} button>
              <SVGIcons.Sponser />
              <ListItemText
                className={classes.listItemText}
                primary="Sponser"
              />
            </ListItem>
          </Link>
          <Link href="/about" passHref>
            <ListItem className={classes.ListItem} button>
              <SVGIcons.About />
              <ListItemText className={classes.listItemText} primary="About" />
            </ListItem>
          </Link>
          <Link href="/contact" passHref>
            <ListItem className={classes.ListItem} button>
              <SVGIcons.Contact />
              <ListItemText
                className={classes.listItemText}
                primary="Contact"
              />
            </ListItem>
          </Link>
        </List>
        {/* Other list */}
        <List>
          <Typography className={classes.listTitle} variant="h2">
            Other
          </Typography>
          <Link href="/code-of-conduct" passHref>
            <ListItem className={classes.ListItem} button>
              <SVGIcons.CodeOfConduct />
              <ListItemText
                className={classes.listItemText}
                primary="Code of Conduct"
              />
            </ListItem>
          </Link>
          <Link href="/privacy" passHref>
            <ListItem className={classes.ListItem} button>
              <SVGIcons.PrivacyPolicy />
              <ListItemText
                className={classes.listItemText}
                primary="Privacy Policy"
              />
            </ListItem>
          </Link>
          <Link href="/terms" passHref>
            <ListItem className={classes.ListItem} button>
              <SVGIcons.TermsOfUse />
              <ListItemText
                className={classes.listItemText}
                primary="Terms of use"
              />
            </ListItem>
          </Link>
        </List>
        <Divider />
      </div>
    </>
  );
};

export default SidebarList;
