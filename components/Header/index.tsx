import { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';

import Navlinks from './Navlinks';

const Header: FC = () => {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Blog
            </Typography>
            <Navlinks />
          </Toolbar>
        </AppBar>
      </div>
  );
}

export default Header;
