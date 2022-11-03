import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './type';

const initialState: AuthState = { isAuth: false, user_id: undefined, username: '' };

const authSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    getUserAuth: (state, action: PayloadAction<{ isAuth: boolean; userData: any }>) => {
      state.isAuth = action.payload.isAuth;
      state.user_id = action.payload.userData.user_id;
      state.username = action.payload.userData.username;
    },
  },
});

export const { getUserAuth } = authSlice.actions;

export default authSlice.reducer;
