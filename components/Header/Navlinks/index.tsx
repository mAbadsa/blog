import React, { FC } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

import Typography from "@material-ui/core/Typography";
import { Link as MUILink } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";

import useStyles from "./styles";

const Navlinks: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes = useStyles();
  const { user, isLoading, error } = useUser();

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
    <Typography className={classes.Navlinks}>
      {user && !isLoading ? (
        <>
          <Link href="/new" passHref>
            <MUILink className={classes.createPostLink} color="textSecondary">
              Create Post
            </MUILink>
          </Link>
          <Link href="/notifications" passHref>
            <MUILink color="textSecondary">
              <NotificationsNoneRoundedIcon></NotificationsNoneRoundedIcon>
            </MUILink>
          </Link>
          <Button
            className={classes.profileButton}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleOpenMenu}
          >
            <Avatar alt={`${user?.name}`} src={`${user?.picture}`} />
          </Button>
          <Menu
            className={classes.menu}
            id="profile-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link href={`/${user?.name}`} passHref>
                <MUILink className={classes.profileLink} underline="none">
                  <span className={classes.username}>{user?.name}</span>
                  <small>@mabadsa</small>
                </MUILink>
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Dashboard</MenuItem>
            <MenuItem onClick={handleClose}>Create Post</MenuItem>
            <MenuItem onClick={handleClose}>Reading List</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <Divider />
            <Link href="/api/auth/logout" passHref>
              <MenuItem onClick={handleClose}>Sign out</MenuItem>
            </Link>
          </Menu>
        </>
      ) : (
        <>
          <Link href="/api/auth/login" passHref>
            <MUILink color="textSecondary">Log in</MUILink>
          </Link>
          <Link href="/signup" passHref>
            <MUILink color="textSecondary">Create account</MUILink>
          </Link>
        </>
      )}
    </Typography>
  );
};

export default Navlinks;
