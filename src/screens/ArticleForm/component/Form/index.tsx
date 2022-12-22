import { ChangeEventHandler, FC, memo } from 'react';
import { useTheme } from '@material-ui/styles';
import Meta from '../Meta';
import MDEditor from '../MDEditor';

import useStyles from './styles';

const Form: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.Form}>
      <Meta />
      <MDEditor />
    </div>
  );
};

export default memo(Form);
