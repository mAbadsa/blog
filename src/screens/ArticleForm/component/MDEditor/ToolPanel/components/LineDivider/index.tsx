import { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';

import SVGIcons from '../PanleIcons/SVG/SVGIcons';

const LineDivider: FC = () => {
  return (
    <IconButton color="secondary">
      <SVGIcons.LineDividerIcon />
    </IconButton>
  );
};

export default LineDivider;
