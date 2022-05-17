import styled from 'styled-components';
import Container from '@material-ui/core/Container/Container';

export const ArticleLayout = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '4rem 7fr 3fr',
  gap: '1rem',
  padding: '1rem 0rem',
  [theme.breakpoints.down('md')]: {
    display: 'grid',
    gridTemplateColumns: '4rem 1fr',
    gap: '0.5rem',
    padding: '0.5rem 0rem',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'grid',
    gridTemplateColumns: '100%',
    gap: '0',
    padding: '0',
  },
}));

export const StyledContainer = styled(Container)(
  ({ theme }) => `
  width: 100%;
  max-width: 1280px;
  padding-right: 1rem !important;
  padding-left: 1rem !important;
  ${[theme.breakpoints.down('sm')]} {
    margin-bottom: 1rem;
    padding-right: 0rem !important;
    padding-left: 0rem !important;
  }
`,
);
