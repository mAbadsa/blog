import styled from 'styled-components';
import Container from '@material-ui/core/Container/Container';

export const ArticleLayout = styled.div`
  display: grid;
  grid-template-columns: 4rem 7fr 3fr;
  gap: 1rem;
  padding: 1rem;
`;

export const StyledContainer = styled(Container)`
  width: 100%;
  max-width: 1280px;
  padding-right: 1rem !important;
  padding-left: 1rem !important;
`;
