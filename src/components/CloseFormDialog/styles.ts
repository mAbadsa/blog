import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  CloseDialog: {
    backgroundColor: '#fff',
    color: '#090909',
    maxHeight: 'calc(100% - 1.5rem)',
    height: 'auto',
    maxWidth: '480px',
    width: '90%',
    borderRadius: '0.75rem',
    boxShadow:
      '0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.05),0 0 0 1px rgba(9, 9, 9, 0.05)',
  },
  [theme.breakpoints.between(0, 640)]: {
    CloseDialog: {
      maxHeight: '100%',
      height: '100%',
      width: '100%',
      maxWidth: '100%',
      padding: '0.75rem',
      borderRadius: '0rem',
      overflowY: 'auto',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem 0.5rem 0.5rem 0.75rem',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 0.75rem 0.75rem 1.5rem',
    '& h2': {
      fontWeight: 'bold',
      fontSize: '1.5rem',
    },
  },
  closeForm: {},
  dialogBody: {
    padding: '1.5rem',
    '& button, a': {
      boxShadow: 'none',
      fontWeight: 400,
    },
  },
  dialogActions: {
    display: 'flex',
    paddingTop: '1rem',
  },
  dialogLeaveBtn: {
    marginRight: '0.5rem',
    backgroundColor: '#d31616',
    color: '#fff',
    transition: 'all 0.25s',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: '#b90909',
      transition: 'all 0.25s',
    },
  },
  dialogCancelBtn: {
    backgroundColor: '#d6d6d7',
    color: '#3d3d3d',
    transition: 'all 0.25s',
    '&:hover': {
      boxShadow: 'none',
      color: '#090909',
      backgroundColor: '#bdbdbd',
      transition: 'all 0.25s',
    },
  },
}));

export default useStyles;
