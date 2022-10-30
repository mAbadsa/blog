import { FC, useState, ReactElement, ChangeEvent } from 'react';
import { Hidden, MenuItem, FormControl } from '@material-ui/core';
import { StyledSelectList } from './style';
import { TagType } from '../../../type';

const TagsSelectedList: FC<{ tags: Array<string> }> = ({ tags }) => {
  const [tagSelect, setTagSelect] = useState<string>('all');
  const MenuListElements: ReactElement[] = tags.map((tag, id) => {
    return (
      <MenuItem key={tag + '_' + id} value={tag}>
        {tag}
      </MenuItem>
    );
  });

  const handleChange = (evt: ChangeEvent<{ name?: string | undefined; value: unknown }>): void => {
    setTagSelect(evt.target.value as string);
  };

  return (
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
  );
};

export default TagsSelectedList;
