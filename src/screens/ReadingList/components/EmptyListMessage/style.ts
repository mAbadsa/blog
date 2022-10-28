import styled from 'styled-components';

export const StyledContainer = styled('div')`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8rem 4rem;
  `}
`;

export const StyledSpan = styled('span')`
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
