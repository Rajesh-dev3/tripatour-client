// 

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const url = import.meta.env.VITE_BASE_URL;
export const enquiryForm = createApi({
  reducerPath: "enquiryForm",
  baseQuery: fetchBaseQuery({
    baseUrl: url,

  }),
  endpoints: (builder) => ({
    enquiryForm: builder.mutation({
      query: (body) => ({
        url: "/enquiry/sendEnquiry",
        method: "POST",
        body
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useEnquiryFormMutation } = enquiryForm;
