import { Theme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  UserProfile: {
    scrollMarginTop: '56px',
    minHeight: '16rem',
  },
  profile: {
    background: 'linear-gradient(180deg, #000000 8rem, #00000000 8rem)',
  },
  layout: {
    paddingTop: '2rem',
    fontSize: '1rem',
    width: '100%',
    maxWidth: '1024px',
    margin: '0 auto',
    display: 'grid',
    gap: '0.5rem',
    gridTemplateColumns: '100%',
    padding: '0rem',
  },
  profileHeader: {
    marginTop: '0.5rem',
    backgroundColor: '#fff',
  },
  headerTop: {
    position: 'relative',
    marginTop: 'calc(-1 * 2rem)',
    marginBottom: '0.75rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    padding: '0 1rem',
  },
  profileHeaderAvatar: {
    width: '4rem',
    height: '4rem',
    padding: '0.25rem',
    backgroundColor: '#000000',
    borderRadius: '100%',
    verticalAlign: 'middle',
    alignSelf: 'start',
  },
  profileHeaderAvatar_image: {
    borderRadius: '100%',
    width: '100%',
    height: '100%',
    display: 'inline-block',
    verticalAlign: 'bottom',
  },
  headerAction: {
    position: 'absolute',
    top: '2rem',
    right: '0',
    left: '0',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '1rem 1rem 0 0',
  },
  headerActionBtn: {},

  profileHeaderDetails: {
    padding: theme.spacing(2),
    textAlign: 'left',
    '& h1': {
      fontSize: '1.5rem',
      fontWeight: 800,
      marginBottom: theme.spacing(1),
    },
    '& p': {
      marginBottom: theme.spacing(2),
    },
  },

  profileHeaderMeta: {
    fontSize: '0.875rem',
    color: '#717171',
    marginBottom: '0.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: '0',
    '& span, a': {
      padding: '0.5rem 0.5rem',
    },
    '& svg': {
      fill: 'hsl(235deg 58% 44%)',
      marginRight: theme.spacing(1),
    },
    '& a': {
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      transition: 'color 0.25s',
      '&:hover': {
        color: 'hsl(235deg 58% 44%)',
        transition: 'color 0.25s',
      },
      '& svg': {
        fill: 'hsl(235deg 58% 44%)',
        marginRight: theme.spacing(1),
      },
    },
  },

  [`@media (min-width: 640px)`]: {
    profileHeaderDetails: {
      '& h1': {
        fontWeight: 800,
        fontSize: '1.875rem',
      },
    },
  },
  [`@media (min-width: 768px)`]: {
    layout: {
      padding: '0.5rem',
      paddingTop: '4rem !important',
    },
    profileHeader: {
      borderRadius: '0.375rem',
    },
    headerTop: {
      position: 'relative',
      marginTop: 'calc(-1 * 4rem)',
      marginBottom: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0 1rem',
    },
    headerAction: {
      top: '4rem',
    },
    profileHeaderAvatar: {
      alignSelf: 'center',
      width: '8rem',
      height: '8rem',
      padding: theme.spacing(1),
    },
    profileHeaderDetails: {
      textAlign: 'center',
    },
    profileHeaderMeta: {
      justifyContent: 'center',
      marginLeft: 'calc(-1 * 0.25rem)',
      '& span, a': {
        padding: '0.25rem 0.75rem',
      },
    },
  },
}));

export default useStyles;
