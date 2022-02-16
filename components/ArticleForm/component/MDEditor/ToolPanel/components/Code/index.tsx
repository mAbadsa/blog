import { FC } from "react";
import IconButton from "@material-ui/core/IconButton";

import SVGIcons from "../PanleIcons/SVG/SVGIcons";

const Code: FC = () => {
  return (
    <IconButton color="secondary">
      <SVGIcons.CodeIcon />
    </IconButton>
  );
};

export default Code;
