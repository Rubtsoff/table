import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "nonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://63d16999d5f0fa7fbdcaeb3b.mockapi.io/",
  }),
  endpoints: () => ({}),
});
