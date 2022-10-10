import React, { Fragment } from 'react';
import { useRouter } from 'next/router';

import Header from '@components/Header/Header';
import Footer from '@components/Footer';
import useStyles from './styles';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        paddingTop: router.pathname === '/new' || router.pathname.slice(-4) === 'edit' ? 0 : '56px',
      }}
    >
      <Header
        display={router.pathname === '/new' || router.pathname.slice(-4) === 'edit' ? true : false}
      />
      {children}
      <Footer
        display={router.pathname === '/new' || router.pathname.slice(-4) === 'edit' ? true : false}
      />
    </div>
  );
};

export default Layout;
