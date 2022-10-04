import styled from 'styled-components';
import NavLink from '@components/NavLink';

export const StyledMoreArticles = styled('div')`
  ${({ theme }) => `
  display: grid;
  gap: ${theme.spacing(4)}px;
  border-radius: 0.375rem;
  box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.05);
  background-color: #fafafa;
  padding: ${theme.spacing(4)}px;
  ${[theme.breakpoints.down('sm')]} {
    border-radius: 0rem;
  },
`}
`;

export const StyledHeader = styled('header')`
  ${({ theme }) => `
    h3 {
      font-size: 1.25rem;
      line-height: 1.5;
      color: #242424;
      font-weight: 700;
    }
`}
`;

export const StyledLink = styled(NavLink)(({ theme }) => ({
  padding: '0.5rem 0rem',
  color: '#2f3ab2',
}));
