import { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';

import SVGIcons from '../PanleIcons/SVG/SVGIcons';

const Italic: FC = () => {
  return (
    <IconButton color="secondary">
      <SVGIcons.ItalicIcon />
    </IconButton>
  );
};

export default Italic;
