import { FC, useState, ReactElement, MouseEvent } from 'react';
import Link from 'next/link';
import List from '@material-ui/core/List';
import { StyledSideBar, StyledNavLink, StyledListItem } from './style';

const SideBarLeft: FC<{ tags: string[] }> = ({ tags = ['javascript', 'aws', 'css'] }) => {
  const [activeLink, setActiveLink] = useState<number>(-1);

  function handleLinkClick(evt: any, linkIdx: number) {
    evt.preventDefault();
    setActiveLink(linkIdx);
  }

  const TagsList: ReactElement[] = tags.map((item, idx) => {
    return (
      <StyledListItem key={item + '-' + idx}>
        <Link href={`/t/${item}`} passHref>
          <StyledNavLink
            className={activeLink === idx ? 'current' : ''}
            textPrimary
            color="secondary"
            onClick={(evt: MouseEvent<HTMLAnchorElement>) => handleLinkClick(evt, idx)}
          >
            #{item}
          </StyledNavLink>
        </Link>
      </StyledListItem>
    );
  });
  return (
    <StyledSideBar item md={3} lg={3}>
      <List style={{ padding: 0 }}>
        <StyledListItem>
          <Link href="/t" passHref>
            <StyledNavLink
              className={activeLink === -1 ? 'current' : ''}
              textPrimary
              color="secondary"
              onClick={(evt: MouseEvent<HTMLAnchorElement>) => handleLinkClick(evt, -1)}
            >
              All Tags
            </StyledNavLink>
          </Link>
        </StyledListItem>
        {TagsList}
      </List>
    </StyledSideBar>
  );
};

export default SideBarLeft;
