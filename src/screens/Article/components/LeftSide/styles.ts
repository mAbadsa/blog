import styled from 'styled-components';
import Button from '@components/Button';
import SVGIcons from '@components/SVG/SVGIcons';

export const LeftSideStyled = styled.aside(({ theme }) => ({
  display: 'block',
  gridRowEnd: 'initial',
  width: '4rem',
  [theme.breakpoints.down('md')]: {
    gridRowEnd: 'span 2',
  },
  [theme.breakpoints.down('sm')]: {
    gridRowEnd: 'initial',
    width: '100%',
  },
}));

export const StyledArticleAction = styled.div(({ theme }) => ({
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
  padding: 0,
  paddingBottom: 0,
  display: 'grid',
  gap: '1.5rem',
  position: 'sticky',
  // background: 'rgb(255, 255, 255)',
  boxShadow: 'none',
  justifyContent: 'stretch',
  top: 'calc(72px + 6vh)',
  zIndex: 10,
  [theme.breakpoints.down('sm')]: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopRightRadius: '0.375rem',
    borderTopLeftRadius: '0.375rem',
    padding: '0.5rem',
    background: 'rgb(255, 255, 255)',
    boxShadow: '0 -1px 5px rgb(0 0 0 / 20%)',
    top: 'calc(100% - 56px)',
    zIndex: 100,
  },
}));

export const StyledActionInner = styled('div')`
  ${({ theme }) => `
    display: grid;
    gap: ${theme.spacing(4)}px;
    justify-content: stretch;
    ${[theme.breakpoints.down('sm')]} {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-bottom: env(safe-area-inset-bottom);
    }
  `}
`;

export const StyledFiiledLike = styled(SVGIcons.FilledLike)`
  ${({ theme }) => `
    fill: #dc2626;
    background-color: #dc2626;
  `}
`;

export const StyledButton = styled(Button)`
  ${({ theme }) => `
  background-color: transparent;
  padding: 0;
  span {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      ${[theme.breakpoints.down('sm')]} {
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
    }
  &:hover:nth-child(1) {
    background-color: transparent;
      span {
        span:nth-child(1) {
          background-color: #dc26261a;
          svg {
            fill: #dc2626;
            transition: all 0.25s;
          }
        }
      }
    }
    &:hover:nth-child(2) {
      background-color: transparent;
        span {
          span:nth-child(1) {
            background-color: #0596691a;
            svg path {
              fill: #059669;
              transition: all 0.25s;
            }
          }
        }
      }
      &:hover:nth-child(3) {
        background-color: transparent;
          span {
            span:nth-child(1) {
              background-color: #4f46e51a;
              svg {
                fill: #4f46e5;
                transition: all 0.25s;
              }
            }
          }
        }
  `}
`;

export const StyledIconContainer = styled('span')`
  ${({ theme }) => `
      width: 40px;
      height: 40px;
      border-radius: 50%;
      transition: all 0.25s;
      svg {
        width: 24px;
        height: 24px;
        fill: #3d3d3d;
        transition: all 0.25s;
      }
      &:hover {
        background-color: #dc26261a;
        svg:nth-child(1) {
          fill: #dc2626;
          transition: all 0.25s;
        }
        svg:nth-child(2) {
          fill: #059669;
          transition: all 0.25s;
        }
        svg:nth-child(3) {
          fill: #4f46e5;
          transition: all 0.25s;
        }
      }
    `}
`;

export const StyledReactCount = styled('span')`
  ${({ theme }) => `
      color: #575757;
      font-size: 0.875rem;
      line-height: 21px;
      font-weight: 400;
  `}
`;
