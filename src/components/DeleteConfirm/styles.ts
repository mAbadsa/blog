import { ComponentType, ReactElement } from 'react';
import Styled, { StyledComponent } from 'styled-components';
import { Typography, TypographyTypeMap } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import NavLink from '@components/NavLink';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
// import { StyledHeader } from '@components/AuthenticationModal/styles';

export const StyledDeleteConfirm = Styled('div')`
  ${({ theme }) => `
  background-color: #fff;
  color: #090909;
  max-height: calc(100% - 1.5rem);
  border-radius: 0.75rem;
  padding: ${theme.spacing(8)}px ${theme.spacing(12)}px;
  box-shadow: 0 0 0 1px #1717171a;

  ${[theme.breakpoints.between(0, 640)]} {
    max-height: 100%;
    height: 100%;
    width: 100%;
    max-width: 100%;
    padding: 0.75rem;
    border-radius: 0rem;
    overflow-y: auto;
  }
  `}
`;

export const StyledHeader: StyledComponent<
  OverridableComponent<TypographyTypeMap<{}, 'span'>>,
  any,
  {},
  never
> = Styled(Typography)`
  ${({ theme }) => `
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: ${theme.spacing(2)}px;
  `}
`;

export const StyledDescBody = Styled(Typography)`
  ${({ theme }) => `
    font-size: 1.125rem;
    line-height: 27px;
    margin-bottom: ${theme.spacing(4)}px;
    & a {
      color: #3b49df;
      text-decoration: none;
    }
  `}
`;

export const StyledDialogActions = Styled('div')`
  ${({ theme }) => `
    display: flex;
    justify-content: flex-start;
    gap: 5px;
  `}
`;

export const StyledButton = Styled(Button)`
  ${({ theme }) => `
    background-color: #dc2626;
    color: #FFF;
    padding: ${theme.spacing(2)}px ${theme.spacing(4)}px;
    :hover {
      background-color: #b91c1c;
      color: #FFF;
    }
  `}
`;

export const StyledNavLink = Styled(NavLink)`
  ${({ theme }) => `
    background-color: #d6d6d7;
    color: #3d3d3d;
    border-radius: 0.375rem;
    line-height: 28px;
    font-size: 1rem;
    text-decoration: none;
    :hover {
      background-color: #bdbdbd;
      color: #090909;
      text-decoration: none;
    }
  `}
`;
