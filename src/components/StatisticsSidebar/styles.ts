import Styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';

import NavLink from '../NavLink';
import { ComponentType } from 'react';

export const StyledStatsSideBar = Styled('div')`
  ${({ theme }) => `
    display: block;
    grid-row-end: initial;
    width: 240px;
    ${[theme.breakpoints.down('md')]} {
      width: 212px;
    }
    ${[theme.breakpoints.down('sm')]} {
      display: none;
    }
  `}
`;

export const StyledList = Styled(List)`
  ${({ theme }) => `
    ${[theme.breakpoints.down('sm')]} {
    }
  `}
`;

export const StyledNavLink: ComponentType<any> = Styled(NavLink)<{ current?: boolean }>`
  ${({ theme, current }) => `
    display: flex;
    color: #040404;
    font-size: 16px;
    align-items: center;
    flex-grow: 1;
    border-radius: 0.375rem;
    padding: ${theme.spacing(2)}px;
    transition: background cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms, color cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms;
    background-color: ${current ? '#fff' : 'transparent'};
    ${[theme.breakpoints.down('sm')]} {
    }
  `}
`;

export const StyledListItemText = Styled(ListItemText)`
  ${({ theme }) => `
    ${[theme.breakpoints.down('sm')]} {
    }
  `}
`;

export const StyledBadge = Styled(Badge)`
  ${({ theme }) => `
    display: inline-block;
    min-width: ${theme.spacing(2)}px;
    font-weight: 400;
    font-size: 0.875rem;
    margin-left: auto;
    background-color: #d4d4d4;
    color: #404040;
    padding: ${theme.spacing(1)}px;
    line-height: 1;
    border-radius: 0.375rem;
    ${[theme.breakpoints.down('sm')]} {
    }
  `}
`;
