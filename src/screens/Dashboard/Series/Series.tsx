import { FC } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Typography from '@material-ui/core/Typography';

import { StyledMain, StyledTitle, StyledLoadinSpan, StyledContainer } from './styles';

const Dashboard: FC = () => {
  const { user, error, isLoading } = useUser();
  return (
    <StyledContainer>
      <StyledMain>
        {error && <div>{error}</div>}
        {isLoading ? (
          <StyledLoadinSpan />
        ) : (
          <StyledTitle variant="h2">
            {user && user.name}
            {"'s"} Series
          </StyledTitle>
        )}
        <Typography>This user doesn&apos;t have any series.</Typography>
      </StyledMain>
    </StyledContainer>
  );
};

export default Dashboard;
