import { FC } from 'react';
import Typography from '@material-ui/core/Typography';

import {
  StyledAuthenticationModal,
  StyledHeader,
  StyledCloseButton,
  StyledImage,
  StyledModalBody,
  StyledImageContainer,
  StyledModalContainer,
  StyledModalDescription,
  StyledModalActions,
  StyledButton,
} from './styles';

import SVGIcons from '../SVG/SVGIcons';

const AuthenticationModal: FC<{ closeModel: ((evt: any) => void) | undefined }> = ({
  closeModel,
}) => {
  return (
    <StyledAuthenticationModal>
      <StyledHeader>
        <Typography variant="h2">Log in to continue</Typography>
        <StyledCloseButton color="secondary" variant="text" onClick={closeModel}>
          <SVGIcons.Close />
        </StyledCloseButton>
      </StyledHeader>
      <StyledModalBody>
        <StyledModalContainer>
          <StyledImageContainer>
            <StyledImage
              src="/assets/images/dev_logo.webp"
              alt="DEV-logo"
              width="80"
              height="80"
              layout="fixed"
            />
          </StyledImageContainer>
          <StyledModalDescription variant="body1">
            {" We're a place where coders share, stay up-to-date and grow their careers. "}
          </StyledModalDescription>
          <StyledModalActions>
            <StyledButton href="/api/auth/login" variant="contained" color="primary">
              Log in
            </StyledButton>
            <StyledButton href="/api/auth/login" variant="text" color="primary">
              Create account
            </StyledButton>
          </StyledModalActions>
        </StyledModalContainer>
      </StyledModalBody>
    </StyledAuthenticationModal>
  );
};

export default AuthenticationModal;
