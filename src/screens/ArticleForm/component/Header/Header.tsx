import { FC, MouseEventHandler } from 'react';
import Link from 'next/link';

import { useTheme } from '@material-ui/styles';
import { Link as MUILink } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import useStyles from './styles';
import { Typography } from '@material-ui/core';
import SVGIcons from '../../../../components/SVG/SVGIcons';
import FormTabs from './Tabs';

const Header: FC<{
  value: number;
  handleChange: any;
  handleClose: MouseEventHandler<HTMLAnchorElement>;
}> = ({ value, handleChange, handleClose }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.Header}>
      <Typography className={classes.logo} component="span">
        <Link href="/" passHref>
          <MUILink>
            <SVGIcons.DEVLogo />
          </MUILink>
        </Link>
      </Typography>
      <Typography className={classes.title} component="span">
        Create Post
      </Typography>
      <nav className={classes.headerTaps}>
        <FormTabs value={value} handleChange={handleChange} />
      </nav>
      <IconButton
        className={classes.closeForm}
        href={''}
        aria-label="close-article-editor"
        onClick={handleClose}
        color="primary"
      >
        <Close aria-label="close" />
      </IconButton>
    </div>
  );
};

export default Header;
