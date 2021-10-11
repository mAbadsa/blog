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
      paddingBlock: '0',
      '& h2>a': {
        fontSize: '1.875rem',
        fontWeight: 'bold',
        wordBreak: 'break-word',
        overflowWrap: 'anywhere',
      }
    },
    postCardActions: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0px',
      margin: '-8px',
    },
    postCard__details: {
      display: 'flex',
      
    },
    postCard__save: {

    },
    noReaction: {
      
    },
    reactionLink: {
      display: 'flex',
      alignItems: 'center',
      padding: '0.25rem 0.75rem',
      paddingLeft: '0.5rem',
      '& svg, span': {
        fill: '#3d3d3d',
        color: '#3d3d3d',
      },
      '& svg': {
        marginRight: '0.25rem',
      },
    }
  })
);

export default useStyles;
