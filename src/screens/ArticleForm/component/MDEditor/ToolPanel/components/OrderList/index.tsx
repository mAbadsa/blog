import { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';

import SVGIcons from '../PanleIcons/SVG/SVGIcons';

const OrderList: FC = () => {
  return (
    <IconButton color="secondary">
      <SVGIcons.OrderListIcon />
    </IconButton>
  );
};

export default OrderList;
