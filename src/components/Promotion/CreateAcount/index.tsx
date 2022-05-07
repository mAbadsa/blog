import { FC } from "react";
import Link from "next/link";

import { useTheme, Link as MUILink } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import NavLink from "../../NavLink";

import useStyles from "./styles";

const CreateAccount: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.CreateAccount}>
      <Typography className={classes.mainLink} variant="h2">
        <Link href="/" passHref>
          <MUILink>DEV COMMUNITY</MUILink>
        </Link>{" "}
        is a community of 716,325 amazing developers
      </Typography>
      <Typography>
        We&apos;re a place where coders share, stay up-to-date and grow their
        careers.
      </Typography>
      <div className={classes.loginBtnBox}>
        <Link href="/create-account" passHref>
          <NavLink color="primary" outlined>
            Create account
          </NavLink>
        </Link>
        <Link href="/create-account" passHref>
          <NavLink textPrimary color="primary">
            Log in
          </NavLink>
        </Link>
      </div>
    </div>
  );
};

export default CreateAccount;
