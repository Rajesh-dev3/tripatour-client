import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const url = import.meta.env.VITE_BASE_URL;
export const listing = createApi({
  reducerPath: "listing",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (builder) => ({
    listing: builder.query({
      query: () => ({
        url: "/package/client/listing",
        method: "GET",
      }),
    }),
  }),
});


export const { useListingQuery } = listing;
