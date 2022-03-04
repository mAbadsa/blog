import { FC } from "react";
import IconButton from "@material-ui/core/IconButton";

import SVGIcons from "../PanleIcons/SVG/SVGIcons";

const Underline: FC = () => {
  return (
    <IconButton color="secondary">
      <SVGIcons.UnderlineIcon />
    </IconButton>
  );
};

export default Underline;
