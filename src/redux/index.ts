import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, PersistConfig, persistStore } from 'redux-persist';

import { articleApi } from '@redux/apis/articlesApi';
import { readingListApi } from '@redux/apis/readingListApi';
import { userApi } from '@redux/apis/userApi';
import authReducer from '@redux/slices/authSlice';
import readingListSlice from '@redux/slices/readingList';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  readingList: readingListSlice,
  auth: authReducer,
  [articleApi.reducerPath]: articleApi.reducer,
  [readingListApi.reducerPath]: readingListApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(articleApi.middleware)
      .concat(readingListApi.middleware)
      .concat(userApi.middleware),
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

export {} from './slices/articleSlice';
export {} from './slices/authSlice';
export {} from './slices/readingList';
export {
  useGetArticlesQuery,
  usePostArticleMutation,
  useUpdateArticleMutation,
  usePostDraftArticleMutation,
} from './apis/articlesApi';
export {
  useGetReadingListQuery,
  usePostReactionMutation,
  useGetReactionsQuery,
} from './apis/readingListApi';
export { useGetUserProfileQuery } from './apis/userApi';
