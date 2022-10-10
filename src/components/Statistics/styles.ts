import Styled from 'styled-components';

export const StyledStats = Styled('div')`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
    gap: ${theme.spacing(4)}px;
    padding-top: ${theme.spacing(3)}px;
    ${[theme.breakpoints.down('sm')]} {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }
  `}
`;

export const StyledStatsCard = Styled('div')`
  ${({ theme }) => `
    padding: ${theme.spacing(6)}px;
    background: #fafafa;
    color: #404040;
    box-shadow: 0 0 0 1px #1717170d;
    border-radius:  Max(0px, Min(0.375rem, calc((100vw - 4px - 100%) * 9999))) / 0.375rem;
  `}
`;

export const StyledStrong = Styled('strong')`
  ${({ theme }) => `
    font-size: 1.875rem;
    line-height: 1.25;
    color: #242424;
    font-weight: bolder;
  `}
`;

export const StyledDesc = Styled('span')`
  ${({ theme }) => `
    display: block;
    font-size: 1em;
    color: #717171;
  `}
`;
