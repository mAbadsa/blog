import React, { FC } from "react";
import Link from "next/link";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core";
import { Link as MUILink } from "@material-ui/core";

import LoginWithGoogle from "./LoginWithGoogle";
import useStyles from "./styles";

const SignupForm: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Paper className={classes.root} elevation={1} variant="outlined">
      <Typography
        className={classes.title}
        variant="h2"
        align="center"
        color="textPrimary"
      >
        Welcome to Blog Community
      </Typography>
      <div className={classes.loginStrategy}>
        <LoginWithGoogle />
      </div>
      <div className={classes.divider}>
        <span>
          Already have an account?{" "}
          <Link href="/login">
            <a>log in.</a>
          </Link>
        </span>
      </div>
    </Paper>
  );
};

export default SignupForm;
