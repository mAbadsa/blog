import { FC, useState, ReactElement, ChangeEvent } from 'react';
import Link from 'next/link';
import { Grid, Hidden, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import NavLink from '@components/NavLink';
import { StyledHeader, StyledHeaderTypography, StyledTextField, StyledSelectList } from './style';

const Header: FC<{ tags: string[] }> = ({ tags }) => {
  const [tagSelect, setTagSelect] = useState<string>('all');
  const MenuListElements: ReactElement[] = tags.map((item, idx) => {
    return (
      <MenuItem key={item + '-' + idx} value={item}>
        {item}
      </MenuItem>
    );
  });

  const handleChange = (evt: ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
    console.log(evt);
    setTagSelect(evt.target.value as string);
  };

  return (
    <StyledHeader container item justifyContent="space-between">
      <Grid container item xs={12} sm={6} md={9} justifyContent="space-between" alignItems="center">
        <StyledHeaderTypography variant="h1">Reading List (0)</StyledHeaderTypography>
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
        <FormControl variant="outlined" className="formControl" fullWidth>
          <StyledTextField
            id="outlined-search"
            placeholder="Search..."
            aria-label="Search-field"
            type="search"
            variant="outlined"
          />
        </FormControl>
        <FormControl variant="outlined" className="formControl" fullWidth>
          <Hidden only={['md', 'lg']}>
            <StyledSelectList
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={tagSelect}
              onChange={handleChange}
            >
              <MenuItem value={'all'}>all tags</MenuItem>
              {MenuListElements}
            </StyledSelectList>
          </Hidden>
        </FormControl>
      </Grid>
    </StyledHeader>
  );
};

export default Header;
