import { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';

import SVGIcons from '../PanleIcons/SVG/SVGIcons';

const UploadImage: FC = () => {
  return (
    <IconButton color="secondary">
      <SVGIcons.UploadImageIcon />
    </IconButton>
  );
};

export default UploadImage;
