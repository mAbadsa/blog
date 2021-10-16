import { makeStyles, createStyles, Theme } from "@material-ui/core";
import transitions from "@material-ui/core/styles/transitions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& a': {
        display: 'block',
        padding: '1rem',
        fontSize: '1rem',
        color: '#242424',
        borderBottom: '1px solid #efefef',
        transition: 'all 0.25s',
        '&:hover': {
          color: '#323ebe',
          textDecoration: 'none',
          transition: 'all 0.25s',
          backgroundColor: '#fff',
          '& div': {
            color: '#717171',
          },
        },
      },
    },
    comment: {
      color: "#717171",
      paddingTop: "0.25rem",
      fontSize: "0.875rem",
    },
  })
);

export default useStyles;
