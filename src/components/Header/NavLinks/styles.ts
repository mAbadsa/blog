import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  Navlinks: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    '& > * + *': {
      marginLeft: theme.spacing(1),
    },
  },
  menu: {
    '& div[class^=MuiPaper]': {
      width: '250px',
      border: '2px solid #000',
      boxShadow: '4px 4px 0 #000',
      top: '55px !important',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        top: '50px !important',
        transition: 'all 0.25s',
      },
      '& ul': {
        padding: '0px',
        '& li': {
          margin: '3px',
          color: '#000',
          fontWeight: '300',
          '&:hover': {
            borderRadius: '5px',
            color: theme.palette.primary.main,
          },
        },
      },
    },
  },
  profileButton: {
    marginLeft: '0.25rem',
    width: '40px',
    height: '40px',
    minWidth: '40px',
  },
  profileLink: {
    width: '100%',
    color: '#000',
    padding: 0,
    '& small': {
      opacity: 0.75,
    },
    '&:hover': {
      color: '#2f3ab2',
    },
  },
  username: {
    display: 'block',
  },
  linkItem: {
    '&:first-of-type': {
      color: '#3d3d3d',
      border: '1px solid #3b49df00',
      backgroundColor: '#00000000',
      borderRadius: '0.375rem',
      padding: '0.5rem 1rem',
      whiteSpace: 'nowrap',
      transition: 'all 0.25s',
      '&:hover': {
        backgroundColor: '#3b49df1a',
        color: '#323ebe',
        transition: 'all 0.25s',
      },
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    '&:nth-of-type(2)': {
      color: '#3b49df',
      border: '1px solid #3b49df',
      borderRadius: '0.375rem',
      padding: '0.5rem 1rem',
      whiteSpace: 'nowrap',
      transition: 'all 0.25s',
      '&:hover': {
        backgroundColor: '#3b49df',
        color: '#fff',
        transition: 'all 0.25s',
      },
      [theme.breakpoints.down('md')]: {
        marginLeft: '0px',
      },
      [theme.breakpoints.up('md')]: {
        marginLeft: '16px',
      },
    },
  },
  NotificationsNoneRoundedIcon: {
    padding: '0.5rem',
    width: '40px',
    height: '40px',
    marginLeft: '0.25rem',
    marginRight: '0.25rem',
  },
  login_mobile: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  createPost_mobile: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  createAccount_mobile: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(0),
    },
  },
  searchIcon_mobile: {
    display: 'none',
    width: '40px',
    marginRight: theme.spacing(1),
    '& a': {
      padding: '0.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
}));

export default useStyles;
