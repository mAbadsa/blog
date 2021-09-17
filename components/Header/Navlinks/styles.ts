import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // display: 'none',
      // [theme.breakpoints.up('md')]: {
      //   display: 'flex',
      // },
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    // sideMenuNavLink: {
    //   display: 'none',
    //   color: theme.palette.primary.main,
    //   [theme.breakpoints.up('md')]: {
    //     display: 'flex',
    //     transition: 'all 0.25s',
    //   },
    // },
    // menu: {
    //   width: '300px', 
    // },
    createPostLink: {
      backgroundColor: "#fff",
      border: '1px solid #fff',
      borderRadius: '5px',
      color: theme.palette.primary.main,
      padding: '7px 15px',
      whiteSpace: 'nowrap',
      transition: 'all 0.25s',
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: '#F0F0F0',
        transition: 'all 0.25s',
      }
    },
    menu: {
      '& div[class^=MuiPaper]': {
        width: "250px",
        border: "2px solid #000",
        boxShadow: "4px 4px 0 #000",
        top: "55px !important",
        [theme.breakpoints.down('xs')]: {
          width: "100%",
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
            }
          },
        }
      }
    },
    profileButton: {
      marginLeft: theme.spacing(1),
    },
    profileLink: {
      color: "#000",
      '& small': {
        color: '#959595',
      },
      '&:hover': {
        color: theme.palette.primary.main,
      }
    },
    username: {
      display: 'block',
    },
  }),
);

export default useStyles;
