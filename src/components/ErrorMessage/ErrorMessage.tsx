import { FC, ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';
import { StyledContainer, StyledAction } from './style';

const ErrorMessage: FC<{ message: string }> = ({ message, children }) => {
  return (
    <StyledContainer>
      <Typography variant="h2" style={{ color: '#3d3d3d' }}>
        Oops...
      </Typography>
      <Typography variant="body1" align="center" color="secondary">
        {message}
      </Typography>
      <StyledAction>{children}</StyledAction>
    </StyledContainer>
  );
};

export default ErrorMessage;
