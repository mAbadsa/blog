import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  ToolPanel: {
    position: 'sticky',
    display: 'flex',
    top: 0,
    backgroundColor: '#f9f9f9',
    padding: '0.5rem 4rem',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(6),
    paddingRight: '3rem',
    overflow: 'visible',
    flexShrink: 0,
    margin: '-2rem -4rem 2rem -4rem',
    zIndex: 100,
    [theme.breakpoints.down('md')]: {
      margin: '-2rem -3rem 1.5rem -3rem',
    },
  },
  mainItem: {
    display: 'flex',
    width: '100%',
  },
  extraItem: {
    position: 'relative',
  },
  moreBtn: {
    marginLeft: 'auto',
    '&:hover': {
      color: '#090909',
    },
  },
  hiddenMenu: {
    display: 'flex',
  },
}));

export default useStyles;
