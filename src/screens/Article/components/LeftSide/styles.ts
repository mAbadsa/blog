import styled, { keyframes, css } from 'styled-components';
import Button from '@components/Button';
import SVGIcons from '@components/SVG/SVGIcons';

const pulse = keyframes`
  0% {
    opacity: 0;
    transform: scale(2.2);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.2);
  }
`;
const animation = () => css`
  ${pulse} 3s ease 0s 1 normal forwards;
`;

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

export const StyledButton = styled(Button)<{
  isliked?: Boolean;
  isSelected?: Boolean;
  isInReadingList?: Boolean;
  clicked?: Boolean;
}>`
  ${({ theme, isliked, isInReadingList, clicked }) => `
  background-color: transparent;
  padding: 0;
  .like-container {
    position: relative;
    border: ${isliked ? '2px solid #dc2526' : '2px solid transparent'};
    background-color: ${isliked ? '#dc26261a' : 'transparent'};
    transition: all 0.25s;
    &::after {
      content: '';
      position: absolute;
      left: 0px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      opacity: 0;
      transform: scale(2);
      border: 2px solid transparent;
      border-radius: 50%;
      background-color: transparent;
      z-index: 1000;
      transition: all 0.25s;
      animation: ${animation};
      ${clicked ? `animation: ${animation}` : ''};
    }
  }

  .bookmark-icon_container {
    position: relative;
    border: ${isInReadingList ? '2px solid #4f46e5' : '2px solid transparent'};
    background-color: ${isInReadingList ? '#4f46e51a' : 'transparent'};
    transition: all 0.25s;
    &::after {
      content: '';
      position: absolute;
      left: 0px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      opacity: 0;
      transform: scale(2);
      border: 2px solid transparent;
      border-radius: 50%;
      background-color: transparent;
      z-index: 1000;
      transition: all 0.25s;
      ${clicked ? `animation: ${animation}` : ''};
    }
  }

  span {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: all 0.25s;
      ${[theme.breakpoints.down('sm')]} {
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .reaction-count_like {
        color: ${isliked ? '#dc2526' : '#3d3d3d'};
      }
      .reaction-count_bookmark {
        color: ${isInReadingList ? '#4f46e5' : '#3d3d3d'};
      }
      svg[class='filledlike-icon'] {
        fill: #dc2626;
      }
      svg[class='filledbookmark-icon'] {
        fill: #4f46e5;
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
