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
    minHeight: '150px',
    flex: '1 0 auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0 0 0.375rem 0.375rem',
  },
  textArea: {
    minHeight: '100%',
    whiteSpace: 'pre-wrap',
    boxShadow: 'none',
    overflow: 'hidden',
    transition: 'none',
    outline: 'none',
    fontSize: '18px',
    resize: 'none',
    borderWidth: '0px',
  },
}));

export default useStyles;
