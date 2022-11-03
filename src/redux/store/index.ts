import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, PersistConfig, persistStore } from 'redux-persist';

import { apiSlice } from '@redux/slices/api';
import authReducer from '@redux/slices/authSlice';
import readingListSlice from '@redux/slices/readingList';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  readingList: readingListSlice,
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const persistor = persistStore(store);
