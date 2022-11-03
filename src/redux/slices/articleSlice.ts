import { createSlice } from '@reduxjs/toolkit';
import { ArticleState } from './type';

const initialState: ArticleState = {};

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
});
