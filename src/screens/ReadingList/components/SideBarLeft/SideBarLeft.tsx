import { FC, useState, ReactElement, MouseEvent } from 'react';
import Link from 'next/link';
import List from '@material-ui/core/List';
import { StyledSideBar, StyledNavLink, StyledListItem } from './style';
import TagListItem from './TagListItem';

const SideBarLeft: FC<{ tags: Array<string> }> = ({ tags }) => {
  const [activeLink, setActiveLink] = useState<number>(-1);

  function handleLinkClick(evt: any, linkIdx: number) {
    evt.preventDefault();
    setActiveLink(linkIdx);
  }

  const TagsList: ReactElement[] = tags.map((tag, id) => {
    return (
      <TagListItem
        key={tag + '_' + id}
        id={id}
        tag={tag}
        activeLink={activeLink}
        handleLinkClick={handleLinkClick}
      />
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
