import { createStyles, Theme, makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  ({
    PostCardAvatar: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '0.5rem',
    },
    avatar: {
      backgroundColor: red[500] + '!important',
      marginRight: '0.5rem',
    },
    avatarMeta: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center',
      marginTop: '5px',
      // '& a': {
      //   transition: 'all 0.25s',
      //   '&:hover': {
      //     color: '#090909',
      //     textDecoration: 'none',
      //     transition: 'all 0.25s',
      //   },
      // },
    },
    username: {
      padding: '0.25rem 0rem 0rem 0.0rem !important',
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
      transition: 'all 0.25s',
      '&:hover': {
        color: '#090909',
        textDecoration: 'none !important',
        transition: 'all 0.25s',
      }
    },
    avatarMetaTime: {
      fontSize: '12px',
      color: '#717171',
      '&:hover': {
        color: '#090909',
        textDecoration: 'none',
        transition: 'all 0.25s',
      }
    },
  })
);

export default useStyles;
