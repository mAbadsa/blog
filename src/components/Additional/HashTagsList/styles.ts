import { Theme, makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  HashTagsList: {
    borderRadius: '0.375rem',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 0 0 1px #0909090d',
    color: '#242424',
    overflowWrap: 'anywhere',
  },
  title: {
    padding: '0.75rem 1rem',
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#242424',
    borderBottom: '1px solid #efefef',
    '& a': {
      fontSize: 'inherit',
      color: 'inherit',
      transition: 'all 0.25s',
      '&:hover': {
        color: '#323ebe',
        textDecoration: 'none',
        transition: 'all 0.25s',
      },
    },
  },
}));

export default useStyles;
