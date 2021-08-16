import React, { FC } from 'react';
import Link from 'next/link';

import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { Link as MUILink } from '@material-ui/core';

import useStyles from './styles';

interface Props {
  className: string;
}

const Navlinks: FC<Props> = ({ className }) => {
  const classes = useStyles();

  return (
    <Typography className={clsx(classes.root, {[classes.sideMenuNavLink]: className === "sideMenuNavLink"})}>
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
      <Link href="/signin" passHref>
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
