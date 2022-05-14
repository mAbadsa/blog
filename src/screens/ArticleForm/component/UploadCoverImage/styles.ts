import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  UploadCoverImage: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: '1.25rem',
    backgroundColor: 'white',
  },
  coverImage: {
    borderRadius: '0.375rem',
    marginRight: theme.spacing(2),
  },
  SpinnerBox: {
    minWidth: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Spinner: {
    marginRight: '0.275rem',
  },
  buttonBox: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  removeButton: {
    color: '#dc2626',
    marginLeft: theme.spacing(2),
    '&:hover': {
      color: '#b91c1c',
    },
  },
}));

export default useStyles;
