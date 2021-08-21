import React, { FC } from 'react';
import Link from 'next/link';

import Typography from '@material-ui/core/Typography';
import { Link as MUILink } from '@material-ui/core';

import useStyles from './styles';

const Navlinks: FC = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
      <Link href="/" passHref>
        <MUILink color="textSecondary">
          Blogs
        </MUILink>
      </Link>
      <Link href="/contact" passHref>
        <MUILink color="textSecondary">
          Contact
        </MUILink>
      </Link>
      <Link href="/dashboard" passHref>
        <MUILink color="textSecondary">
          Dashboard
        </MUILink>
      </Link>
      <Link href="/api/auth/login" passHref>
        <MUILink color="textSecondary">
          Signin
        </MUILink>
      </Link>
      <Link href="/signup" passHref>
        <MUILink color="textSecondary">
          Signup
        </MUILink>
      </Link>
    </Typography>
  )
}

export default Navlinks;
