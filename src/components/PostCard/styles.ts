import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { NoEncryption } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  Article: {
    boxShadow: '0 0 0 1px #1717171a !important',
    borderRadius: '0.375rem',
    marginBottom: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  PostCard: {
    borderRadius: '0.375rem',
    '&:focus-within': {
      outline: 'none',
      boxShadow: '0 0 0 2px #3b49df',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 0 2px #3b49df',
    },
  },
  card_body: {
    padding: `${theme.spacing(5)}px`,
  },
  cardContent: {
    paddingLeft: 'calc(2rem + 0.5rem) !important',
    paddingBlock: '0 !important',
    '& h2>a': {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      wordBreak: 'break-word',
      overflowWrap: 'anywhere',
      '&:hover': {
        textDecoration: 'none',
        color: '#323ebe',
        transition: 'all 0.25s',
      },
    },
  },
  linkTypography: {
    lineHeight: '37.5px',
    fontSize: '30px',
    fontWeight: 700,
  },
  title_link: {
    padding: 0,
    '&:hover': {
      textDecoration: 'none',
      color: '#3b49df',
    },
  },
  postCardActions: {
    display: 'flex',
    paddingLeft: 'calc(2rem + 0.5rem) !important',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'space-between',
    padding: '0px',
    margin: '-8px',
  },
  postCard__details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postCardActions__reactions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& a': {
      transition: 'all 0.25s',
      '&:hover': {
        textDecoration: 'none',
        color: '#090909',
        transition: 'all 0.25s',
        '& svg': {
          fill: '#090909',
        },
        '& span': {
          textDecoration: 'none',
          color: '#090909',
          transition: 'all 0.25s',
        },
      },
    },
  },
  postCard__save: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: '123px',
  },
  noReaction: {},
  reactionLink: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.25rem 0.75rem',
    paddingLeft: '0.0rem',
    '& svg, span': {
      fill: '#3d3d3d',
      color: '#3d3d3d',
    },
    '& svg': {
      marginRight: '0.25rem',
    },
  },
  saveButton: {
    overflowWrap: 'normal',
    backgroundColor: '#d6d6d7',
    color: '#3d3d3d',
    '&:hover': {
      backgroundColor: '#bdbdbd',
      color: '#090909',
    },
  },
  tertiary: {
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;
