import { createStyles, Theme, makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) => ({
  PostCardAvatar: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '0.5rem',
  },
  avatar: {
    width: '32px',
    height: '32px',
    backgroundColor: red[500] + '!important',
    marginRight: '0.5rem',
  },
  avatarMeta: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    marginTop: '5px',
  },
  username: {
    padding: `${theme.spacing(1)}px 0rem 0rem 0.0rem !important`,
    marginLeft: `calc(${theme.spacing(1)}px * -1)`,
    marginTop: `calc(${theme.spacing(2)}px * -1)`,
    marginBottom: `calc(${theme.spacing(2)}px * -1)`,
    color: '#3d3d3d',
    backgroundColor: 'transparent',
    fontSize: '0.875rem',
    '&:hover': {
      color: '#090909',
    },
    '& span': {
      fontWeight: 400,
      lineHeight: '1.25',
      textTransform: 'none',
      color: 'inherit',
      justifyContent: 'flex-start',
    },
  },
  avatarMetaPostLink: {
    lineHeight: '1.25',
    marginLeft: -theme.spacing(1),
    marginTop: theme.spacing(2),
    padding: 0,
    transition: 'all 0.25s',
    '&:hover': {
      color: '#090909',
      textDecoration: 'none !important',
      transition: 'all 0.25s',
    },
  },
  avatarMetaTime: {
    fontSize: '12px',
    color: '#717171',
    '&:hover': {
      color: '#090909',
      textDecoration: 'none',
      transition: 'all 0.25s',
    },
  },
}));

export default useStyles;
