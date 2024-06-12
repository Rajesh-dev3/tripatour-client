import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const url = import.meta.env.VITE_BASE_URL;
export const allPackages = createApi({
  reducerPath: "allPackages",
  baseQuery: fetchBaseQuery({
    baseUrl: url,

  }),
  endpoints: (builder) => ({
    allPackages: builder.query({
      query: () => ({
        url: "/tour/allPackages",
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAllPackagesQuery } = allPackages;
