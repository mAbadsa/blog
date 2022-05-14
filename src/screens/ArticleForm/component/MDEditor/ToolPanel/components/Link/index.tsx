import { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';

import SVGIcons from '../PanleIcons/SVG/SVGIcons';

const Link: FC = () => {
  return (
    <IconButton color="secondary">
      <SVGIcons.LinkIcon />
    </IconButton>
  );
};

export default Link;
