import styled from 'styled-components';
import Image from 'next/image';

import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import NavLink from '@components/NavLink';
import Button from '@components/Button';

export const StyledAuthorPreview = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: `${theme.spacing(4)}px`,
  borderRadius: '0.375rem',
  border: '0 solid',
  borderTopWidth: `${theme.spacing(8)}px`,
  boxShadow: '0 0 0 1px rgba(23, 23, 23, 0.05)',
  backgroundColor: '#fafafa',
  // top: `${theme.spacing(4)}px`,
  padding: `${theme.spacing(4)}px`,
  paddingTop: '0',
  [theme.breakpoints.down('sm')]: {
    borderRadius: '0rem',
  },
}));

export const StyledHeader = styled('div')(({ theme }) => ({
  position: 'relative',
  marginTop: `-${theme.spacing(4)}px`,
}));

export const StyledLink = styled(NavLink)(({ theme }) => ({
  display: 'flex !important',
  padding: '0.5rem 0rem',
  transition: 'color 0.25s',
  '&:hover': {
    color: '#2f3ab2',
    transition: 'color 0.25s',
  },
}));

export const StyledImage = styled(Image)(({ theme }) => ({
  borderRadius: '100%',
  flexShrink: 0,
  width: '48px !important',
  height: '48px !important',
}));

export const StyledUsername = styled('span')(({ theme }) => ({
  fontSize: '1.25rem',
  marginTop: '1.25rem',
  marginLeft: '0.5rem !important',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
}));

export const StyledList = styled(List)`
  padding: 0px;
`;

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  '& span': {
    color: '#525252',
    textTransform: 'uppercase',
    fontSize: '0.75rem',
    fontWeight: 700,
  },
  '& p': {
    color: '#404040',
    fontSize: '1rem',
  },
}));
