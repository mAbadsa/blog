import { FC } from "react";
import Link from "next/link";

import { useTheme } from "@material-ui/styles";
import { Link as MUILink } from "@material-ui/core";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import SVGIcons from "../../../SVG/SVGIcons";

const Header: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.Header}>
      <Typography className={classes.logo} component="span">
        <Link href="/" passHref>
          <MUILink>
            <SVGIcons.DEVLogo />
          </MUILink>
        </Link>
      </Typography>
      <Typography component="span">Create Post</Typography>
    </div>
  );
};

export default Header;
