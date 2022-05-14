import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import ReactMarkdown from 'react-markdown';

export const MainContentStyled = styled.main({
  display: 'grid',
  scrollMarginTop: '56px',
});

export const Article = styled.article({
  position: 'relative',
  padding: 0,
  borderRadius: '0.375rem',
  background: 'rgb(255, 255, 255)',
  color: 'rgb(23, 23, 23)',
  boxShadow: '0 0 0 1px rgba(23, 23, 23, 0.1)',
});

export const ArticleHeader = styled.header({
  overflowWrap: 'anywhere',
  wordBreak: 'break-word',
});

export const ArticleHeaderMeta = styled.div(
  ({ theme }) => `
    && {
      padding: ${theme.spacing(8)}px ${theme.spacing(16)}px 0px ${theme.spacing(16)}px;
    }
  `,
);

export const ArticleTitle = styled(Typography)`
  && {
    ${({ theme }) => `
    font-size: ${theme.spacing(12)}px;
    font-weight: 800;
    margin-bottom: ${theme.spacing(2)}px;`}
  }
`;

export const StyledArticleMainContent = styled('div')(
  ({ theme }) => `
  padding: ${theme.spacing(8)}px ${theme.spacing(16)}px;
`,
);

export const StyledMarkdown = styled(ReactMarkdown)({
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
});
