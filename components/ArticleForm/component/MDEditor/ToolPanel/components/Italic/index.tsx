import { FC } from "react";
import { useTheme } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

import SVGIcons from "../PanleIcons/SVG/SVGIcons";
import useStyles from "./styles";

const Italic: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <IconButton className={classes.Italic}>
      <SVGIcons.ItalicIcon />
    </IconButton>
  );
};

export default Italic;
