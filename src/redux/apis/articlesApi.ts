import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const articleApi = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: ['Article'],
  endpoints: builder => ({
    getArticles: builder.query({
      query: ({ limit, offset }) => `api/articles/get-articles?limit=${limit}&offset=${offset}`,
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
  useGetArticlesQuery,
  usePostArticleMutation,
  useUpdateArticleMutation,
  usePostDraftArticleMutation,
} = articleApi;
export { articleApi };
