import { FC } from 'react';
import { StyledStats, StyledStatsCard, StyledStrong, StyledDesc } from './styles';

const Statistics: FC<{
  reactions: number;
  postViews: number;
  listings: number;
  credits: number;
}> = ({ reactions, postViews, listings, credits }) => {
  return (
    <StyledStats>
      <StyledStatsCard>
        <StyledStrong>{reactions}</StyledStrong>
        <StyledDesc>Total post reactions</StyledDesc>
      </StyledStatsCard>
      <StyledStatsCard>
        <StyledStrong>
          {postViews} {' < 500'}
        </StyledStrong>
        <StyledDesc>Total post views</StyledDesc>
      </StyledStatsCard>
      <StyledStatsCard>
        <StyledStrong>{listings}</StyledStrong>
        <StyledDesc>Listings created</StyledDesc>
      </StyledStatsCard>
      <StyledStatsCard>
        <StyledStrong>{credits}</StyledStrong>
        <StyledDesc>Credits available</StyledDesc>
      </StyledStatsCard>
    </StyledStats>
  );
};

export default Statistics;
