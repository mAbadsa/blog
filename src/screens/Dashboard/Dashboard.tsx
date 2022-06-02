import { FC } from 'react';
import Statistics from '../../components/Statistics';
import StatisticsSidebar from '../../components/StatisticsSidebar';

import { StyledDashBoard, StyledMain, StyledHeader, StyledTitle } from './styles';

const Dashboard: FC = () => {
  return (
    <StyledDashBoard>
      <StyledMain>
        <StyledHeader>
          <StyledTitle variant="h1">Dashboard</StyledTitle>
          <Statistics reactions={0} postViews={0} listings={0} credits={0} />
        </StyledHeader>
        <StatisticsSidebar />
      </StyledMain>
    </StyledDashBoard>
  );
};

export default Dashboard;
