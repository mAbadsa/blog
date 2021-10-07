import React, { FC, useState } from "react";
import { useTheme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import PostCard from '../../PostCard';
import useStyles from "./styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`home-tabpanel-${index}`}
      aria-labelledby={`home-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `home-tab-${index}`,
    "aria-controls": `home-tabpanel-${index}`,
  };
}

const Taps: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar_bg} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="home tabs"
        >
          <Tab label="Feed" {...a11yProps(0)} />
          <Tab label="Latest" {...a11yProps(1)} />
          <Tab label="Top" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <PostCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Latest
      </TabPanel>
      <TabPanel value={value} index={2}>
        Top
      </TabPanel>
    </div>
  );
};

export default Taps;
