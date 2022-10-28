import Styled, { StyledComponent } from 'styled-components';
import Box, { BoxProps } from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

export const StyledGridContainer: StyledComponent<any, any, any, any> = Styled(Grid)`
  ${({ theme }) => `
    padding: ${theme.spacing(2)}px;
    max-width: 1280px;
    scroll-margin-top: 56px;
    margin: 0 auto;
    .MuiGrid-item	{
      padding: ${theme.spacing(1)}px;
    }
    // ${[theme.breakpoints.down('md')]} {
    //   padding: 0px;
    // }
    ${[theme.breakpoints.down('sm')]} {
      padding: 0px;
      .MuiGrid-item.MainContent-container	{
        padding: ${theme.spacing(0)}px;
      }
    }
  `}
`;

export const StyledSideBar = Styled('div')`
  ${({ theme }) => `
    display: block;
    grid-row-end: initail;
    ${[theme.breakpoints.down('md')]} {
      width: 2fr;
    }
    ${[theme.breakpoints.down('sm')]} {
      display: none;
    }
  `}
`;

export const StyledContent = Styled(Box)`
  ${({ theme }) => `
    padding-bottom: ${theme.spacing(4)}px;
    display: block;
    background-color: #ffffff;
    box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.1);
    ${[theme.breakpoints.down('md')]} {
      width: 100%;
    }
    ${[theme.breakpoints.down('sm')]} {
      width: 100%;
      box-shadow: none;
      border-radius: 0;
    }
  `}
`;
