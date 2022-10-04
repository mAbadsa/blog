import { ComponentType } from 'react';
import Styles from 'styled-components';
import { Typography } from '@material-ui/core';
import Chip, { ChipProps } from '@material-ui/core/Chip';
import NavLink from '@components/NavLink';
import Button from '@components/Button';
import IconButton from '@material-ui/core/IconButton';

export const StyledPostCardContainer = Styles('div')`
  ${({ theme }) => `
    background-color: #FFFFFF;
    color: #171717;
    box-shadow: 0 0 0 1px #1717171a;
    border-radius: 0.375rem;
    overflow-wrap: anywhere;
    margin-bottom: ${theme.spacing(6)}px;
    margin-top: ${theme.spacing(3)}px;
    > div {
      border-bottom: 1px solid #1717171a;
    }
    > div:last-child {
      border-bottom: none !important;
    }
  `}
`;

export const StyledPostCard = Styles('div')`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: 4fr 2fr 2fr;
    grid-template-rows: auto;
    grid-gap: 0.5rem;
    padding: 1rem;
    align-items: center;
  `}
`;

export const StyledStoryTitleBox = Styles('div')`
  ${({ theme }) => `
    grid-column-end: unset;
    overflow-wrap: anywhere;
    word-break: break-word;
  `}
`;

export const StyledStoryTitle = Styles(Typography)`
${({ theme }) => `
  display: flex !important;
  align-items: center !important;
  line-height: 28px;
`}
`;

export const StyledNavLink = Styles(NavLink)`
${({ theme }) => `
  display: inline-flex !important;
  align-items: center !important;
  padding: 0;
  font-weight: 700;
`}
`;

export const StyledChip: ComponentType<any> = Styles(Chip)<{ status: string }>`
${({ theme, status }) => `
  background-color: ${status == 'draft' ? '#fcd34d' : '#1ad36c'};
  color:  ${status == 'draft' ? '#78350f' : '#141516'};
  width: fit-content;
  border-radius: 0.375rem;
  :hover {
    background-color: ${status == 'draft' ? '#fcd34d' : '#1ad36c'};
    color:  ${status == 'draft' ? '#78350f' : '#141516'};
  }
`}
`;

export const StyledStoryActions = Styles('div')`
${({ theme }) => `
  display: flex;
  justify-self: end;
`}
`;

export const StyledButton: ComponentType<any> = Styles(Button)<{ type: string }>`
${({ theme, type }) => `
  color: ${type === 'delete' ? '#dc2626' : '#3d3d3d'};
  background-color: #00000000;
  :hover {
    color: ${type === 'delete' ? '#b91c1c' : '#090909'};
    background-color: '#00000009';
  }
`}
`;

export const StyledIconButton: ComponentType<any> = Styles(IconButton)`
${({ theme, type }) => `
  padding: ${theme.spacing(1)}px;
  border-radius: 0.375rem;
`}
`;
