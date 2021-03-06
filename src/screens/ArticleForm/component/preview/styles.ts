import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  Preview: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '500px',
    height: '75vh',
  },
  cover: {
    position: 'relative',
    width: '100%',
    paddingTop: '42%',
  },
  coverImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '0.375rem',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  article: {
    width: '100%',
    minHeight: '100%',
  },
  articleTitle: {
    padding: '2rem 3rem 0rem 3rem',
    '& h1': {
      marginBottom: '0.5rem',
      fontSize: '2.25rem',
      fontWeight: 800,
      lineHeight: 1.25,
    },
  },
  articleMain: {
    padding: '2rem 3rem',
  },
  markDown: {
    '& table': {
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      borderColor: 'grey',
      fontSize: '1.125rem',
      fontWeight: 'bold',
      border: '1px solid #555',
    },
    '& tr': {
      display: 'table-row',
    },
    '& thead': {
      display: 'table-header-group',
      verticalAlign: 'middle',
    },
    tbody: {
      display: 'table-row-group',
    },
    th: {
      display: 'table-cell',
      background: '#efefef',
      textAlign: 'left',
      padding: '0.25rem',
      border: '1px solid #d6d6d7',
    },
    '& td': {
      padding: '0.25rem',
      border: '1px solid #d6d6d7',
    },
    '& blockquote': {
      padding: '0 1em',
      color: '#6a737d',
      borderLeft: '0.25em solid #dfe2e5',
    },
    '& p code': {
      background: 'rgba(0,0,0,0.1)',
      borderRadius: '0.375rem',
      maxWidth: '100%',
      fontSize: '80%',
      padding: '0.1em 0.25em',
    },
  },
}));

export default useStyles;
