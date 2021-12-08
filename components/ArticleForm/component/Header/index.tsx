import { FC } from "react";
import Link from "next/link";

import { useTheme } from "@material-ui/styles";
import { Link as MUILink } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import SVGIcons from "../../../SVG/SVGIcons";
import FormTabs from "./Tabs";

const Header: FC<{ value: number; handleChange: any }> = ({
  value,
  handleChange,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.Header}>
      <div className={classes.headerTitle}>
        <Typography className={classes.logo} component="span">
          <Link href="/" passHref>
            <MUILink>
              <SVGIcons.DEVLogo />
            </MUILink>
          </Link>
        </Typography>
        <Typography className={classes.title} component="span">
          Create Post
        </Typography>
      </div>
      <div className={classes.headerTaps}>
        <FormTabs value={value} handleChange={handleChange} />
        <IconButton className={classes.closeForm}>
          <Close aria-label="close" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
