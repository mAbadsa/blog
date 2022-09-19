import Styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import NavLink from '../../components/NavLink';

export const StyledDashBoard = Styled('div')`
  ${({ theme }) => `
  margin-inline: 35.5px;
  ${[theme.breakpoints.down('sm')]} {
      margin-inline: 0px;
  }
  `}
`;

export const StyledMain = Styled('main')`
${({ theme }) => `
  display: grid;
  column-gap: ${theme.spacing(4)}px;
  row-gap: ${theme.spacing(4)}px;
  grid-template-columns: 240px 1fr;
  grid-template-rows: min-content 1fr;
  line-height: 24px;
  padding: ${theme.spacing(4)}px;
  ${[theme.breakpoints.down('md')]} {
    padding: ${theme.spacing(2)}px;
    gap: ${theme.spacing(2)}px;
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

export const StyledPosts = Styled('div')`
  ${({ theme }) => `
    ${[theme.breakpoints.down('sm')]} {
      width: 100%;
    }
  `}
`;

export const StyledPostsHeader = Styled('div')`
  ${({ theme }) => `
    margin-top: ${theme.spacing(3)}px;
    ${[theme.breakpoints.down('sm')]} {
      h2 {
        display: none;
      }
    }
  `}
`;

export const StyledBody = Styled('div')`
  ${({ theme }) => `
    box-shadow: rgba(23, 23, 23, 0.05) 0px 0px 0px 1px;
    border-radius: 0.375rem;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(250, 250, 250);
    width: 100%;
    ${[theme.breakpoints.down('sm')]} {
      border-radius: 0;
    }
  `}
`;

export const StyledNavLink = Styled(NavLink)`
  ${({ theme }) => `
    background-color: #3b49df;
    color: #f9f9f9;
    box-shadow: 0 2px 5px #0000000d;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    line-height: 1.5rem;
    border-radius: 0.375rem;
    padding: ${theme.spacing(3)}px ${theme.spacing(5)}px;
    :hover {
      background-color: #2f3ab2;
    }
  `}
`;
