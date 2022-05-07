import React, { Fragment } from "react";
import { useRouter } from "next/router";

import Header from "../Header/Header";
import useStyles from "./styles";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header display={router.pathname === "/new" ? true : false} />
      {children}
    </div>
  );
};

export default Layout;
