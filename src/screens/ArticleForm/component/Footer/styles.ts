import { Theme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  Footer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    height: '72px',
    gridRowEnd: '4',
    gridColumnStart: '2',
    gridColumnEnd: 'span 2',
    // "& button": {
    //   whiteSpace: "nowrap",
    //   fontWeight: 500,
    //   padding: "0.5rem 1rem",
    //   borderRadius: "0.375rem",
    //   "&:hover": {
    //     transition: "all 0.25s",
    //   },
    // },
  },
  publish: {
    marginRight: '0.5rem',
    // backgroundColor: "#3b49df",
    // color: "#fff",
    // "&:hover": {
    //   backgroundColor: "#323ebe",
    // },
  },
  saveDraft: {
    padding: '0.5rem 1rem',
    // marginRight: '0.5rem',
    // backgroundColor: 'transparent',
    // color: '#3d3d3d',
    // '&:hover': {
    //   backgroundColor: 'rgba(59, 73, 223, 0.10)',
    //   color: '#323ebe',
    // },
  },
}));

export default useStyles;
