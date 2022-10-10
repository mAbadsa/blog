import Image from 'next/image';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@components/Button';

export const StyledAuthenticationModal = styled('div')`
  ${({ theme }) => `
    width: 640px;
    display: grid;
    grid-template-rows: auto 1fr;
    max-width: 640px;
    background: #FFFFFF;
    z-index: 1;
    border-radius: 0.5rem;
    border: none;
    box-shadow:  0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.1);
  }  
  ${[theme.breakpoints.down('sm')]} {
    width: 100%;
  },
`}
`;

export const StyledHeader = styled('header')`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${theme.spacing(4)}px ${theme.spacing(4)}px ${theme.spacing(4)}px ${theme.spacing(
    16,
  )}px;
    border-bottom: 1px solid rgb(229, 229, 299);
`}
`;

export const StyledCloseButton = styled(Button)`
  && {
    width: 40px !important;
    height: 40px !important;
    padding: 8px;
    min-width: 40px;
    transition: all 0.25s;
    :hover {
      svg {
        fill: #2f3ab2;
        transition: all 0.25s;
      }
    }
  }
`;

export const StyledModalBody = styled('div')`
  ${({ theme }) => `
    padding: 2rem;
    overflow-y: auto;
    grid-auto-rows: min-content;
  `}
`;

export const StyledModalContainer = styled('div')`
  ${({ theme }) => `
    display: grid;
    grid-gap: 1rem;
  `}
`;

export const StyledImageContainer = styled('figure')`
  ${({ theme }) => `
    width: 80px;
    height: 80px;
    margin: 0;
<<<<<<< HEAD
    transform: rotate(-10deg);
=======
>>>>>>> c5e131511cceaff136a26249c3b33a3e4bbfc45c
  `}
`;

export const StyledImage = styled(Image)`
  ${({ theme }) => `
<<<<<<< HEAD
    && {
      border-radius: 0.375rem;
      span {
        overflow: hidden !important;
      }
    }
  `}
`;

export const StyledModalDescription = styled(Typography)`
  ${({ theme }) => `
    color: #404040;
    line-height: 24px;
=======
    border-radius: 0.375rem;
    transform: rotate(-10deg);
  `}
`;

export const StyledModalDescription = styled('p')`
  ${({ theme }) => `
    color: #404040;
>>>>>>> c5e131511cceaff136a26249c3b33a3e4bbfc45c
  `}
`;

export const StyledModalActions = styled('div')`
  ${({ theme }) => `
    display: grid;
    margin: 0 auto;
    align-items: center;
<<<<<<< HEAD
    padding: 0px 3rem 1rem;
=======
    padding: 0px 1rem 1rem;
>>>>>>> c5e131511cceaff136a26249c3b33a3e4bbfc45c
    grid-gap: 0.25rem;
    width: 100%;
    ${[theme.breakpoints.down('sm')]} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
<<<<<<< HEAD
      padding: 0px 1rem 1rem;
      align-items: center;
=======
      align-items: center;
      padding: 0px 3rem 1rem;
>>>>>>> c5e131511cceaff136a26249c3b33a3e4bbfc45c
    }
  `}
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;
