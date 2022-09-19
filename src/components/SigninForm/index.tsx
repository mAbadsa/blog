import React, { FC } from 'react';
import Link from 'next/link';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core';
import { Link as MUILink } from '@material-ui/core';
import useStyles from './styles';

const SigninForm: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Paper className={classes.root} elevation={1} variant="outlined">
      <Typography className={classes.title} variant="h2" align="center" color="textPrimary">
        Welcome to Blog Community
      </Typography>

      <div className={classes.divider}>
        <span>Have a password? Continue with your email address</span>
      </div>
      <form>
        <TextField
          label="Email"
          id="email"
          type="email"
          fullWidth
          autoFocus
          margin="normal"
          variant="outlined"
          placeholder="Enter your email..."
        />
        <TextField
          label="Password"
          id="password"
          type="password"
          autoFocus
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked
              // onChange={}
              name="rememberMe"
              color="primary"
            />
          }
          label="Remember Me"
        />
        <Button
          className={classes.continueButton}
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          disableElevation
        >
          Continue
        </Button>
        <Typography className={classes.forgetPassword} component="p" align="center" paragraph>
          <Link href="/forgot-password" passHref>
            <MUILink>I forgot my password</MUILink>
          </Link>
        </Typography>
      </form>
    </Paper>
  );
};

export default SigninForm;
