import React, { Fragment } from 'react';

import Header from '../Header';
import useStyles from './styles';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
