import { createApi, fetchBaseQuery, Api } from '@reduxjs/toolkit/query/react';
import type { ReactionPayload } from '../slices/type';

const readingListApi = createApi({
  reducerPath: 'readingListApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: ['ReadingList'],
  endpoints: builder => ({
    getReadingList: builder.query({
      query: () => 'api/reading-list',
      providesTags: ['ReadingList'],
    }),
    getReactions: builder.query({
      query: ({ articleId }) => `/api/reactions/${articleId}`,
      providesTags: ['ReadingList'],
    }),
    postReaction: builder.mutation<any, Partial<ReactionPayload>>({
      invalidatesTags: ['ReadingList'],
      query: ({ reactableId, category, reactableType }) => ({
        url: `api/reactions`,
        method: 'POST',
        body: {
          reactable_id: reactableId,
          category,
          reactable_type: reactableType,
        },
      }),
    }),
  }),
});

export const { usePostReactionMutation, useGetReadingListQuery, useGetReactionsQuery } =
  readingListApi;
export { readingListApi };
