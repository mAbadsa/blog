import { FC } from "react";
import { useTheme } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

import useStyles from "./styles";
import SVGIcons from "../PanleIcons/SVG/SVGIcons";

const Heading: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <IconButton className={classes.Heading}>
      <SVGIcons.HeadingIcon />
    </IconButton>
  );
};

export default Heading;
