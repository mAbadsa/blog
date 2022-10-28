import Styled from 'styled-components';
import NavLink from '@components/NavLink';

export const StyledTagsContainer = Styled('div')`
  ${({ theme }) => `
    display: inline-block;
  `}
`;

export const StyledNavLink = Styled(NavLink)`
  ${({ theme }) => `
  color: #404040;
  // display: inline-flex;
  // align-items: center;
  // white-space: nowrap;
  // flex-wrap: nowrap;
  transition: all cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms;
  padding: 0.25rem 0.5em;
  :hover {
      background: #1717170d;
      color: #171717;
      box-shadow: inset 0 0 0 1px #1717170d,inset 0 0 0 1px #1717170d,inset 0 0 0 1px #1717170d;
    }
  `}
`;
