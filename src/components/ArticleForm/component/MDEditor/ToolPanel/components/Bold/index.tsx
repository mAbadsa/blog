import { FC } from "react";
import IconButton from "@material-ui/core/IconButton";
import SVGIcons from "../PanleIcons/SVG/SVGIcons";

const Bold: FC = () => {
  return (
    <IconButton color="secondary">
      <SVGIcons.BoldIcon />
    </IconButton>
  );
};

export default Bold;
