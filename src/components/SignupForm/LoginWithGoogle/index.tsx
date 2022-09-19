import { FC } from 'react';
import { GoogleLogin } from 'react-google-login';

import { useTheme } from '@material-ui/core';
import useStyles from './styles';

const LoginWithGoogle: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <GoogleLogin
      className={classes.root}
      clientId={''}
      buttonText="Login with google"
      onSuccess={() => {}}
      onFailure={() => {}}
      theme="dark"
    />
  );
};

export default LoginWithGoogle;
