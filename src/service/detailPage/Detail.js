// 


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const url = import.meta.env.VITE_BASE_URL;
export const detail = createApi({
  reducerPath: "detail",
  baseQuery: fetchBaseQuery({
    baseUrl: url,

  }),
  endpoints: (builder) => ({
    detailHighlight: builder.mutation({
      query: (body) => ({
        url: "/tourDetails/getTourDetails",
        method: "POST",
        body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useDetailHighlightMutation } = detail;
