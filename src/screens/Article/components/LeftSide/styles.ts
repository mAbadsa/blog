import styled from 'styled-components';

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
  background: 'rgb(255, 255, 255)',
  boxShadow: 'none',
  justifyContent: 'stretch',
  top: 'calc(64 + 6vh)',
  zIndex: 10,
  [theme.breakpoints.down('sm')]: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopRightRadius: '0.375rem',
    borderTopLeftRadius: '0.375rem',
    padding: '0.5rem',
    background: 'rgb(255, 25, 55)',
    // background: 'rgb(245, 245, 245)',
    zIndex: 100,
  },
}));
