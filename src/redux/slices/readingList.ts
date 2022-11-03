import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReadingListState } from './type';

const initialState: ReadingListState = {
  readingListCount: 0,
};

export const readingListSlice = createSlice({
  name: 'readingList',
  initialState,
  reducers: {
    setReadingListCount(state: ReadingListState, action: PayloadAction<number>) {
      state.readingListCount = action.payload;
    },
  },
});

export const { setReadingListCount } = readingListSlice.actions;
export default readingListSlice.reducer;
