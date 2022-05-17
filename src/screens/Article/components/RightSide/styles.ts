import styled from 'styled-components';

export const RightSideStyled = styled.aside({
  display: 'block',
  // width: '3fr',
});

export const StyledAuthorContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: `${theme.spacing(4)}px`,
  position: 'sticky',
  top: `${theme.spacing(4)}px`,
  overflowWrap: 'anywhere',
  [theme.breakpoints.down('sm')]: {
    marginTop: `${theme.spacing(4)}px`,
  },
}));
