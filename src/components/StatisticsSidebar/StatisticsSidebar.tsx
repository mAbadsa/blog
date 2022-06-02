import { FC } from 'react';
import Link from 'next/link';
import ListItem from '@material-ui/core/ListItem';
import SVGIcons from '../SVG/SVGIcons';

import { StyledStatsSideBar, StyledList, StyledNavLink, StyledBadge } from './styles';

const StatisticsSidebar: FC = () => {
  return (
    <StyledStatsSideBar>
      <StyledList>
        <ListItem style={{ padding: 0 }} ContainerComponent={(<li />).type}>
          <Link href="/dashboard" passHref>
            <StyledNavLink underline="none" textPrimary color="secondary">
              Posts
              <StyledBadge>0</StyledBadge>
            </StyledNavLink>
          </Link>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Link href="/dashboard" passHref>
            <StyledNavLink underline="none" textPrimary>
              {' Series '}
              <StyledBadge>0</StyledBadge>
            </StyledNavLink>
          </Link>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Link href="/dashboard" passHref>
            <StyledNavLink underline="none" textPrimary>
              {' Followers '}
              <StyledBadge>0</StyledBadge>
            </StyledNavLink>
          </Link>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Link href="/dashboard" passHref>
            <StyledNavLink underline="none" textPrimary>
              {' Following tags '}
              <StyledBadge>0</StyledBadge>
            </StyledNavLink>
          </Link>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Link href="/dashboard" passHref>
            <StyledNavLink underline="none" textPrimary>
              {' Following users '}
              <StyledBadge>0</StyledBadge>
            </StyledNavLink>
          </Link>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Link href="/dashboard" passHref>
            <StyledNavLink underline="none" textPrimary>
              {' Following organizations '}
              <StyledBadge>0</StyledBadge>
            </StyledNavLink>
          </Link>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Link href="/dashboard" passHref>
            <StyledNavLink underline="none" textPrimary>
              {' Following podcasts '}
              <StyledBadge>0</StyledBadge>
            </StyledNavLink>
          </Link>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Link href="/dashboard" passHref>
            <StyledNavLink underline="none" textPrimary>
              {' Listings '}
              <SVGIcons.Maximize />
            </StyledNavLink>
          </Link>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Link href="/dashboard" passHref>
            <StyledNavLink underline="none" textPrimary>
              {' Analytics '}
            </StyledNavLink>
          </Link>
        </ListItem>
      </StyledList>
    </StyledStatsSideBar>
  );
};

export default StatisticsSidebar;
