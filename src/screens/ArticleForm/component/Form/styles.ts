import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  Form: {
    gridColumnStart: '2',
    gridColumnEnd: '2',
    // padding: "2rem 4rem",
    backgroundColor: '#fff',
    borderRadius: '0.375rem 0.375rem 0 0',
    boxShadow: '0 0 0 1px #0909091a',
    overflowWrap: 'anywhere',
    overflow: 'auto',
    height: 'calc(100vh - 56px - 72px)',
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    Form: {
      padding: '0rem',
      borderRadius: '0',
    },
  },
}));

export default useStyles;
