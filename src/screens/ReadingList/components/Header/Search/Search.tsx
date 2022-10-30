import { FC } from 'react';
import { FormControl } from '@material-ui/core';
import { StyledTextField } from './style';

const Search: FC = () => {
  return (
    <FormControl variant="outlined" className="formControl" fullWidth>
      <StyledTextField
        id="outlined-search"
        placeholder="Search..."
        aria-label="Search-field"
        type="search"
        variant="outlined"
      />
    </FormControl>
  );
};

export default Search;
