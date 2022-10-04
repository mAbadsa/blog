import Styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import NavLink from '@components/NavLink';

export const StyledMain = Styled('main')`
${({ theme }) => `
  display: grid;
  column-gap: ${theme.spacing(4)}px;
  grid-template-columns: 240px 1fr;
  grid-template-rows: min-content 1fr;
  gap: ${theme.spacing(2)}px;
  line-height: 24px;
  padding: ${theme.spacing(4)}px;
  ${[theme.breakpoints.down('md')]} {
    padding: ${theme.spacing(2)}px;
    grid-template-columns: 1fr;
  }
  ${[theme.breakpoints.down('sm')]} {
    padding: ${theme.spacing(0)}px;
    grid-template-rows: min-content 1fr;
    grid-template-columns: 100%;
    gap: 0.5rem;
    row-gap: 0;
    margin: 0 auto;
  }
`}
`;

export const StyledTitle = Styled(Typography)`
${theme => `
  display: inline-flex;
  font-size: 1.875rem;
  line-height: 48px;
`}
`;

export const StyledContainer = Styled('div')`
  ${({ theme }) => `
    flex: 1 auto;
    min-height: 200px;
  `}
`;

export const StyledLoadinSpan = Styled('span')`
  ${({ theme }) => `
    display: inline-block;
    background-color: #a5a5a5;
    width: 100px;
    height: 20px
  `}
`;
