import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  endpoints: (builder) => ({
    getArtciles: builder.query({
      query: () => "api/articles",
    }),
  }),
});

export const { useGetArtcilesQuery } = apiSlice;
