import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: '0.5rem',
      marginLeft: 'calc(0.25rem * -1)',
      '& a': {
        display: 'inline-block',
        padding: '0.25rem',
        fontSize: '0.875rem',
        borderRadius: '0.375rem',
        color: '#717171',
        lineHeight: '1.3',
        '& span:first-child': {
          opacity: '0.4',
          fontWeight: 'normal',
        }
      },
    },
  })
);

export default useStyles;
