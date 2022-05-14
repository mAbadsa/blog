import { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';

import SVGIcons from '../PanleIcons/SVG/SVGIcons';

const Guide: FC = () => {
  return (
    <IconButton color="secondary">
      <SVGIcons.GuideIcon />
    </IconButton>
  );
};

export default Guide;
