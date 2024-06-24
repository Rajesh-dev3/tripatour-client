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
    detailHighlight: builder.query({
      query: (body) => ({
        url: `/package/client/PackageGetByName?name=${body}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useDetailHighlightQuery } = detail;
