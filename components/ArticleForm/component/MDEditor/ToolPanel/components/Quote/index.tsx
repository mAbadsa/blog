import { FC } from "react";
import IconButton from "@material-ui/core/IconButton";

import SVGIcons from "../PanleIcons/SVG/SVGIcons";

const Quote: FC = () => {
  return (
    <IconButton color="secondary">
      <SVGIcons.QuoteIcon />
    </IconButton>
  );
};

export default Quote;
