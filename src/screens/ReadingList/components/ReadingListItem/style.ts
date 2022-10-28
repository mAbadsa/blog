import { ComponentType } from 'react';
import Styled, { StyledComponent } from 'styled-components';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import NavLink from '@components/NavLink';

export const StyledReadingListItem: StyledComponent<any, any, any, any> = Styled(Grid)`
  ${({ theme }) => `
    padding: ${theme.spacing(6)}px;
    padding-bottom: ${theme.spacing(2)}px;
    .MuiAvatar-root {
      width: 32px;
      height: 32px;
    }
    .CardMain {
      flex: 1 1 0% !important;
      padding-left: ${theme.spacing(3)}px;
    }
    .CardFoot {
      a.UserLisk {
        display: inline-block;
        padding: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
      }
      flex-direction: row;
    }
  `}
`;

export const StyledNavLink = Styled(NavLink)`
  ${({ theme }) => `
    padding: 0;
    color: #404040;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.25;
    word-break: break-word !important;
    :hover {
      background: transparent;
    }
  `}
`;

export const StyledDot = Styled('span')`
  ${({ theme }) => `
    color: #bdbdbd;
  `}
`;
