import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface ArticleState {}

const initialState: ArticleState = {};

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
});
