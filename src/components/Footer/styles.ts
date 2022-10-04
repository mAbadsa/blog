import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import NavLink from '@components/NavLink';

export const StyledFooter = styled('footer')`
  ${({ theme }) => `
    padding: 3rem;
    background-color: #e5e5e5;
    color: #404040;
    text-align: center;
    ${[theme.breakpoints.down('sm')]} {
      padding: ${theme.spacing(5)}px;
    },
  `}
`;

export const StyledFooterContainer = styled('div')`
  ${({ theme }) => `
    padding: 0.25rem 0;
    content-visibility: auto;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `}
`;

export const StyledFooterDescription = styled(Typography)`
  ${({ theme }) => `
    font-size: 0.875rem !important;
  `}
`;

export const StyledNavLink = styled(NavLink)`
  ${({ theme }) => `
    padding: 0 !important;
  `}
`;
