import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ReactionPayload } from './type';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: ['Article'],
  endpoints: builder => ({
    getArtciles: builder.query({
      query: () => 'api/articles',
    }),
    getUserProfile: builder.query({
      query: (username: String) => `api/users/${username}`,
    }),
    postReaction: builder.mutation<any, Partial<ReactionPayload>>({
      query: ({ reactableId, category, reactableType }) => ({
        url: `api/reactions`,
        method: 'POST',
        body: {
          reactable_id: reactableId,
          category,
          reactable_type: reactableType,
        },
      }),
      invalidatesTags: ['Article'],
    }),
  }),
});

export const { useGetArtcilesQuery, useGetUserProfileQuery, usePostReactionMutation } = apiSlice;
