import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

import Statistics from '../../components/Statistics';
import StatisticsSidebar from '../../components/StatisticsSidebar';

import {
  StyledDashBoard,
  StyledMain,
  StyledHeader,
  StyledTitle,
  StyledPostsHeader,
  StyledPosts,
  StyledBody,
  StyledNavLink,
} from './styles';

const Dashboard: FC = () => {
  return (
    <StyledDashBoard>
      <StyledMain>
        <StyledHeader>
          <StyledTitle variant="h1">Dashboard</StyledTitle>
          <Statistics reactions={0} postViews={0} listings={0} credits={0} />
        </StyledHeader>
        <StatisticsSidebar />
        <StyledPosts>
          <StyledPostsHeader>
            <Typography variant="h2">Posts</Typography>
          </StyledPostsHeader>
          <StyledBody>
            <Image
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--XHE_XeFn--/c_imagga_scale,f_auto,fl_progressive,q_auto,w_300/https://dev-to-uploads.s3.amazonaws.com/i/y5767q6brm62skiyywvc.png"
              width="300"
              height="300"
              objectFit="contain"
              alt="sloth"
            />
            <Typography align="center" css={{ marginBlock: '1.5rem' }}>
              This is where you can manage your posts, but you haven&apos;t written anything yet.
            </Typography>
            <Typography
              align="center"
              css={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <Link href="/new" passHref>
                <StyledNavLink color="primary" underline="none">
                  Write your first post now
                </StyledNavLink>
              </Link>
            </Typography>
          </StyledBody>
        </StyledPosts>
      </StyledMain>
    </StyledDashBoard>
  );
};

export default Dashboard;
