import Styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const StyledDashBoard = Styled('div')`
  ${() => `
    margin-inline: 35.5px;
  `}
`;

export const StyledMain = Styled('main')`
${({ theme }) => `
  display: grid;
  column-gap: ${theme.spacing(4)}px;
  grid-template-columns: 240px 1fr;
  grid-template-rows: min-content 1fr;
  line-height: 24px;
  padding: ${theme.spacing(4)}px;
  ${[theme.breakpoints.down('md')]} {
    padding: ${theme.spacing(2)}px;
  }
  ${[theme.breakpoints.down('sm')]} {
    padding: ${theme.spacing(0)}px;
  }
`}
`;

export const StyledHeader = Styled('header')`
${({ theme }) => `
  grid-column: 1 / span 2;
  ${[theme.breakpoints.down('sm')]} {
    padding: ${theme.spacing(3)}px;
  }
`}
`;

export const StyledTitle = Styled(Typography)`
${theme => `
  display: inline-flex;
  font-size: 1.875rem;
  min-height: 40px;
`}
`;
