import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    avatar: {
      backgroundColor: red[500],
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
  })
);

export default useStyles;
