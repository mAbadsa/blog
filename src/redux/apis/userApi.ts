import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: ['Article', 'readingList'],
  endpoints: builder => ({
    getUserProfile: builder.query({
      query: (username: String) => `api/users/${username}`,
    }),
  }),
});

export const { useGetUserProfileQuery } = userApi;
export { userApi };
