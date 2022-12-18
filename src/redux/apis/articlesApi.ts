import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const articleApi = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: ['Article'],
  endpoints: builder => ({
    getArtciles: builder.query({
      providesTags: ['Article'],
      query: () => 'api/articles',
    }),
    postArticle: builder.mutation({
      invalidatesTags: ['Article'],
      query: article => {
        return {
          url: 'api/articles',
          method: 'POST',
          body: { data: article },
        };
      },
    }),
    updateArticle: builder.mutation({
      invalidatesTags: ['Article'],
      query: article => {
        return {
          url: 'api/articles',
          method: 'PUT',
          body: { data: article },
        };
      },
    }),
    postDraftArticle: builder.mutation({
      invalidatesTags: ['Article'],
      query: article => {
        return {
          url: 'api/articles/draft-article',
          method: 'POST',
          body: { data: article },
        };
      },
    }),
  }),
});

export const {
  useGetArtcilesQuery,
  usePostArticleMutation,
  useUpdateArticleMutation,
  usePostDraftArticleMutation,
} = articleApi;
export { articleApi };
