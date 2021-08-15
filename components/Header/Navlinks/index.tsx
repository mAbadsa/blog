import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import useStyles from './styles';

const Navlinks: FC = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
      <Link href="#" color="textSecondary">
        Blogs
      </Link>
      <Link href="#" color="textSecondary">
        Contact
      </Link>
      <Link href="#" color="textSecondary">
        Dashboard
      </Link>
      <Link href="#" color="textSecondary">
        Signin
      </Link>
      <Link href="#" color="textSecondary">
        Signup
      </Link>
    </Typography>
  )
}

export default Navlinks;
