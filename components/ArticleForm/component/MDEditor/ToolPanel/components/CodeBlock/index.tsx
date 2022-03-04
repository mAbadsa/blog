import { FC } from "react";
import IconButton from "@material-ui/core/IconButton";

import SVGIcons from "../PanleIcons/SVG/SVGIcons";

const CodeBlock: FC = () => {
  return (
    <IconButton color="secondary">
      <SVGIcons.CodeBlockIcon />
    </IconButton>
  );
};

export default CodeBlock;
