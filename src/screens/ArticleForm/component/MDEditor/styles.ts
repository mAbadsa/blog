import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  MDEditor: {
    minHeight: '500px',
    padding: '2rem 3rem',
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
