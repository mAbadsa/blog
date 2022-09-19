import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  Meta: {
    padding: '2rem 4rem',
    // backgroundColor: "#fff",
    // borderRadius: "0.375rem 0.375rem 0 0",
    // boxShadow: "0 0 0 1px #0909091a",
    // overflowWrap: "anywhere",
    // overflow: "auto",
    // height: "calc(100vh - 56px - 72px)",
  },
  [`@media (max-width: 639px)`]: {
    Meta: {
      padding: '0.75rem 0.75rem',
    },
  },
  [`@media screen and (min-width: 640px)`]: {
    Meta: {
      padding: '1.25rem 1.25rem',
    },
  },
  [`@media screen and (min-width: 768px)`]: {
    Meta: {
      padding: '2rem 3rem',
    },
  },
  [`@media screen and (min-width: 1024px)`]: {
    Meta: {
      padding: '2rem 4rem',
    },
  },
}));

export default useStyles;
