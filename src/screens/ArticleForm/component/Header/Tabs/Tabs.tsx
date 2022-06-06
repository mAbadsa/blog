import React, { FC, useState } from 'react';
import { useTheme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import useStyles from './styles';

function a11yProps(index: any) {
  return {
    id: `form-tab-${index}`,
    'aria-controls': `form-tabpanel-${index}`,
  };
}

const FormTabs: FC<{ value: number; handleChange: any }> = ({ value, handleChange }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.Tabs}>
      <AppBar className={classes.appBar_bg} position="static">
        <Tabs value={value} onChange={handleChange} aria-label="form tabs">
          <Tab label="Edit" {...a11yProps(0)} />
          <Tab label="Preview" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default FormTabs;
