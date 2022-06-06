import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    padding: '2rem 4rem',
    flex: '1 0 auto',
    position: 'relative',
    flexDirection: 'column',
    borderRadius: '0 0 0.375rem 0.375rem',
    [theme.breakpoints.down('md')]: {
      padding: '2rem 3rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1.25rem',
    },
  },
  MDEditor: {
    minHeight: '500px',
    flex: '1 0 auto',
    position: 'relative',
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0 0 0.375rem 0.375rem',
  },
  textArea: {
    minHeight: '500px',
    whiteSpace: 'pre-wrap',
    fontSize: '1.125rem',
    background: 'transparent',
    border: 'none',
    padding: 0,
    margin: 0,
    outline: 'none',
    width: '100%',
    boxShadow: 'none',
    resize: 'none',
    transition: 'none',
  },
}));

export default useStyles;
