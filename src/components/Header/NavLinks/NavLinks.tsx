import React, { FC } from "react";
import Link from "next/link";
import { useUser, UserProfile } from "@auth0/nextjs-auth0";

import Typography from "@material-ui/core/Typography";
import { Link as MUILink } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";

import NavLink from "../../NavLink";

import useStyles from "./styles";
import SVGIcons from "../../SVG/SVGIcons";

type NavLinksType = {
  user: UserProfile | undefined;
  isLoading: boolean;
  error?: any;
};

const Navlinks: FC<NavLinksType> = ({ user, isLoading, error }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes = useStyles();

  const handleOpenMenu = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(evt.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Typography className={classes.Navlinks} component="div">
      {user && !isLoading ? (
        <>
          <div className={classes.searchIcon_mobile}>
            <Link href="/search" passHref>
              <NavLink textPrimary icon>
                <SVGIcons.Lens />
              </NavLink>
            </Link>
          </div>
          <Link href="/new" passHref>
            <NavLink
              className={classes.createPost_mobile}
              color="primary"
              outlined
            >
              Create Post
            </NavLink>
          </Link>
          <Link href="/notifications" passHref>
            <NavLink
              className={classes.NotificationsNoneRoundedIcon}
              color="secondary"
              textPrimary
            >
              <NotificationsNoneRoundedIcon></NotificationsNoneRoundedIcon>
            </NavLink>
          </Link>
          <IconButton
            className={classes.profileButton}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleOpenMenu}
          >
            <Avatar alt={`${user?.name}`} src={`${user?.picture}`} />
          </IconButton>
          <Menu
            className={classes.menu}
            id="profile-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link href={`/${user?.nickname}`} passHref>
                <NavLink
                  className={classes.profileLink}
                  underline="hover"
                  textPrimary
                  color="secondary"
                >
                  <span className={classes.username}>{user?.name}</span>
                  <small>@{user?.nickname}</small>
                </NavLink>
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Dashboard</MenuItem>
            <MenuItem onClick={handleClose}>Create Post</MenuItem>
            <MenuItem onClick={handleClose}>Reading List</MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href={`/settings`} passHref>
                <MUILink className={classes.profileLink} underline="none">
                  Settings
                </MUILink>
              </Link>
            </MenuItem>
            <Divider />
            <Link href="/api/auth/logout" passHref>
              <MenuItem onClick={handleClose}>Sign out</MenuItem>
            </Link>
          </Menu>
        </>
      ) : (
        <>
          <div className={classes.searchIcon_mobile}>
            <Link href="/search" passHref>
              <NavLink textPrimary icon>
                <SVGIcons.Lens />
              </NavLink>
            </Link>
          </div>
          <Link href="/api/auth/login" passHref>
            <NavLink className={classes.login_mobile} textPrimary>
              Log in
            </NavLink>
          </Link>
          <Link href="/api/auth/login" passHref>
            <NavLink className={classes.createAccount_mobile} outlined>
              Create account
            </NavLink>
          </Link>
        </>
      )}
    </Typography>
  );
};

export default Navlinks;
