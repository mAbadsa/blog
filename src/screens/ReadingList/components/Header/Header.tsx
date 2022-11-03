import { FC, useState, ReactElement, ChangeEvent } from 'react';
import Link from 'next/link';
import { Grid, Hidden, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import NavLink from '@components/NavLink';
import { StyledHeader, StyledHeaderTypography } from './style';
import Search from './Search';
import TagsSelectedList from './TagsSelectedList';

const Header: FC<{ tags: Array<string>; listCount: number }> = ({ tags, listCount }) => {
  return (
    <StyledHeader container item justifyContent="space-between">
      <Grid container item xs={12} sm={6} md={9} justifyContent="space-between" alignItems="center">
        <StyledHeaderTypography variant="h1">Reading List ({listCount})</StyledHeaderTypography>
        <Link href="/readinglist/archive" passHref>
          <NavLink textPrimary color="textPrimary">
            View archive
          </NavLink>
        </Link>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={6}
        md={3}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Search />
        <TagsSelectedList tags={tags} />
      </Grid>
    </StyledHeader>
  );
};

export default Header;
