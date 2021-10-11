import { createStyles, Theme, makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '0.5rem',
    },
    avatar: {
      backgroundColor: red[500],
      marginRight: '0.5rem',
    },
    avatarMeta: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center',
    },
    username: {
      padding: '0.25rem',
      marginLeft: 'calc(0.25rem * -1)',
      marginTop: 'calc(0.5rem * -1)',
      marginBottom: 'calc(0.5rem * -1)',
      color: '#090909',
      fontSize: '0.875rem',
      '&:hover': {
        color: '#090909',
      },
      '& span': {
        fontWeight: 400,
        lineHeight: '1.25',
        textTransform: 'none',
        color: 'inherit',
        justifyContent: 'flex-start',
      }
    },
    avatarMetaPostLink: {
      lineHeight: '1.25',
      '&:hover': {
        color: '#090909',
        textDecoration: 'none',
      }
    },
    avatarMetaTime: {
      fontSize: '12px',
      color: '#717171',
      '&:hover': {
        color: '#090909',
      }
    },
  })
);

export default useStyles;
