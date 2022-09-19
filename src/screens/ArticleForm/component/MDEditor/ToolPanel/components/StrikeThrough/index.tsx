import { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';

import SVGIcons from '../PanleIcons/SVG/SVGIcons';

const StrikeThrough: FC = () => {
  return (
    <IconButton color="secondary">
      <SVGIcons.StrikeThroughIcon />
    </IconButton>
  );
};

export default StrikeThrough;
