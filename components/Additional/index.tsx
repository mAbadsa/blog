import { FC } from 'react';
import Link from 'next/link';
import { useTheme, Link as MUILink } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const Additional: FC = () => {
  const theme = useTheme();
  const classes = useStyles({theme});
  return (
    <div>
      Additional
    </div>
  )
}

export default Additional;
