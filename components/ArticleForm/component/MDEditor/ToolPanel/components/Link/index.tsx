import { FC } from "react";
import { useTheme } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

import SVGIcons from "../PanleIcons/SVG/SVGIcons";
import useStyles from "./styles";

const Link: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <IconButton className={classes.Link}>
      <SVGIcons.LinkIcon />
    </IconButton>
  );
};

export default Link;
