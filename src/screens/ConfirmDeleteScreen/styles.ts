import Styled from 'styled-components';

export const StyledConfirmScreen = Styled('div')`
  ${({ theme }) => `
    // margin-inline: 35.5px;
    padding: ${theme.spacing(2)}px;
    box-shadow: none;
  `}
`;

export const StyledTitle = Styled('div')`
  ${({ theme }) => `
    font-size: 18px;
    background-color: #fafafa;
    color: rgb(64, 64, 64);
    border-radius: 0.375rem;
    box-shadow: 0 0 0 1px #1717170d;
    padding: ${theme.spacing(8)}px ${theme.spacing(12)}px;
    margin: ${theme.spacing(3)}px ${theme.spacing(6)}px -${theme.spacing(1)}px ${theme.spacing(
    6,
  )}px;
  `}
`;
