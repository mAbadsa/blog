import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '1rem',
      boxShadow: '0 0 0 1px #0909091a !important',
      borderRadius: '0.375rem',
    },
    cardContent: {
      paddingLeft: 'calc(2rem + 0.5rem)',
    },
    postCardActions: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    postCard__details: {
    },
    postCard__save: {

    },
    noReaction: {
      
    },
  })
);

export default useStyles;
