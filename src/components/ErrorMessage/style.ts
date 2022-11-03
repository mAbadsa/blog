import Styled from 'styled-components';

export const StyledContainer = Styled('div')`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8rem 4rem;
  `}
`;

export const StyledSpan = Styled('span')`
  ${({ theme }) => `
    color: #717171;
    font-weight: 700;
    svg {
      fill: #717171;
      margin-inline: ${theme.spacing(1)}px;
      vertical-align: bottom;
    }
`}
`;

export const StyledAction = Styled('div')`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacing(4)}px;
  `}
`;
