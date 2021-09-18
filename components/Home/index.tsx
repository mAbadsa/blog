import React, {FC} from 'react'
import Link from 'next/link';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core'
import { Link as MUILink } from '@material-ui/core';

import useStyles from './styles';

const Home: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Grid className={classes.root} container spacing={2} >
      <Grid item xs={12}>
        
      </Grid>
    </Grid>
  )
}

export default Home;
