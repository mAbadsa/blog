import { FC } from "react";
import IconButton from "@material-ui/core/IconButton";

import SVGIcons from "../PanleIcons/SVG/SVGIcons";

const UnOrderList: FC = () => {
  return (
    <IconButton color="secondary">
      <SVGIcons.UnOrderListIcon />
    </IconButton>
  );
};

export default UnOrderList;
