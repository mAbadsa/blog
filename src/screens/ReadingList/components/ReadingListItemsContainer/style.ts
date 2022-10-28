import { ComponentType } from 'react';
import Styled, { StyledComponent } from 'styled-components';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import NavLink from '@components/NavLink';

export const StyledContainer: StyledComponent<any, any, any, any> = Styled(Grid)`
  ${({ theme }) => `
  `}
`;

export const StyledListItem: ComponentType<any> = Styled(ListItem)`
  ${({ theme }) => `
    padding: 0;
    transition: background cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms, color cubic-bezier(0.17, 0.67, 0.5, 0.71) 250ms;
    .current {
      background-color: #fff;
      transition: background cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms, color cubic-bezier(0.17, 0.67, 0.5, 0.71) 250ms;
    }
  `}
`;

export const StyledNavLink: ComponentType<any> = Styled(NavLink)<{ current?: boolean }>`
  ${({ theme, current }) => `
    display: flex;
    color: #404040;
    font-size: 16px;
    align-items: center;
    flex-grow: 1;
    border-radius: 0.375rem;
    padding: ${theme.spacing(2)}px;
    transition: background cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms, color cubic-bezier(0.17, 0.67, 0.5, 0.71) 300ms;
    // background-color: ${current ? '#fff' : 'transparent'};
  `}
`;
