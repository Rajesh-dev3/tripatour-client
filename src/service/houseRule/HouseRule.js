


// 


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const url = import.meta.env.VITE_BASE_URL;
export const houseRule = createApi({
  reducerPath: "houseRule",
  baseQuery: fetchBaseQuery({
    baseUrl: url,

  }),
  endpoints: (builder) => ({
    houseRule: builder.query({
      query: (id) => ({
        url: `/rule/getHouseRule/${id}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useHouseRuleQuery } = houseRule;
