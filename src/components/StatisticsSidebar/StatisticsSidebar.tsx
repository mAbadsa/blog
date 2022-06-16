import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ListItem from '@material-ui/core/ListItem';
import SVGIcons from '../SVG/SVGIcons';

import { StyledStatsSideBar, StyledList, StyledNavLink, StyledBadge } from './styles';

const StatisticsSidebar: FC<{ postsCount: number }> = ({ postsCount }) => {
  const { pathname } = useRouter();
  const pathNameArr = pathname.split('/');
  console.log({ pathNameArr });

  return (
    <StyledStatsSideBar>
      <StyledList>
        <ListItem style={{ padding: 0 }} ContainerComponent={(<li />).type}>
          <Link href="/dashboard" passHref>
            <StyledNavLink
              current={pathNameArr.length === 2 ? true.toString() : false.toString()}
              underline="none"
              textPrimary
              color="secondary"
            >
              Posts
              <StyledBadge>{postsCount ? postsCount : 0}</StyledBadge>
            </StyledNavLink>
          </Link>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Link href="/dashboard/series" passHref>
            <StyledNavLink
              current={pathNameArr[0] === 'series' ? true.toString() : false.toString()}
              underline="none"
              textPrimary
            >
              {' Series '}
              <StyledBadge>0</StyledBadge>
            </StyledNavLink>
          </Link>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Link href="/dashboard/user_followers" passHref>
            <StyledNavLink
              current={pathNameArr[2] === 'user_followers' ? true.toString() : false.toString()}
              underline="none"
              textPrimary
            >
              {' Followers '}
              <StyledBadge>0</StyledBadge>
            </StyledNavLink>
          </Link>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Link href="/dashboard/following_tags" passHref>
            <StyledNavLink
              current={pathNameArr[2] === 'following_tags' ? true.toString() : false.toString()}
              underline="none"
              textPrimary
            >
              {' Following tags '}
              <StyledBadge>0</StyledBadge>
            </StyledNavLink>
          </Link>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Link href="/dashboard/following_users" passHref>
            <StyledNavLink
              current={pathNameArr[2] === 'following_users' ? true.toString() : false.toString()}
              underline="none"
              textPrimary
            >
              {' Following users '}
              <StyledBadge>0</StyledBadge>
            </StyledNavLink>
          </Link>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Link href="/dashboard/following_organizations" passHref>
            <StyledNavLink
              current={
                pathNameArr[2] === 'following_organizations' ? true.toString() : false.toString()
              }
              underline="none"
              textPrimary
            >
              {' Following users '}
              <StyledBadge>0</StyledBadge>
            </StyledNavLink>
          </Link>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Link href="/dashboard/following_organizations" passHref>
            <StyledNavLink
              current={
                pathNameArr[2] === 'following_organizations' ? true.toString() : false.toString()
              }
              underline="none"
              textPrimary
            >
              {' Following organizations '}
              <StyledBadge>0</StyledBadge>
            </StyledNavLink>
          </Link>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Link href="/dashboard/following_podcasts" passHref>
            <StyledNavLink
              current={pathNameArr[2] === 'following_podcasts' ? true.toString() : false.toString()}
              underline="none"
              textPrimary
            >
              {' Following podcasts '}
              <StyledBadge>0</StyledBadge>
            </StyledNavLink>
          </Link>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Link href="/dashboard/listings" passHref>
            <StyledNavLink
              current={pathNameArr[2] === 'listings' ? true.toString() : false.toString()}
              underline="none"
              textPrimary
            >
              {' Listings '}
              <SVGIcons.Maximize />
            </StyledNavLink>
          </Link>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Link href="/dashboard/analytics" passHref>
            <StyledNavLink
              current={pathNameArr[2] === 'analytics' ? true.toString() : false.toString()}
              underline="none"
              textPrimary
            >
              {' Analytics '}
            </StyledNavLink>
          </Link>
        </ListItem>
      </StyledList>
    </StyledStatsSideBar>
  );
};

export default StatisticsSidebar;
