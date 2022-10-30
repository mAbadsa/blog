import Styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const StyledHeader = Styled(Grid)`
  ${({ theme }) => `
  a {
    font-size: 16px;
  }
    ${[theme.breakpoints.down('md')]} {
    }
    ${[theme.breakpoints.down('sm')]} {
      padding: ${theme.spacing(3)}px;
    }
  `}
`;

export const StyledHeaderTypography = Styled(Typography)`
  ${({ theme }) => `
    flex: 1 1 0% !important;
    font-size: 1.875rem;
  `}
`;
