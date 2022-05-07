import { FC } from "react";
import IconButton from "@material-ui/core/IconButton";

import SVGIcons from "../PanleIcons/SVG/SVGIcons";

const Heading: FC = () => {
  return (
    <IconButton color="secondary">
      <SVGIcons.HeadingIcon />
    </IconButton>
  );
};

export default Heading;
