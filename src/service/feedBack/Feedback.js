import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const url =  import.meta.env.VITE_BASE_URL
export const feedBack = createApi({
  reducerPath: 'feedBack',
  baseQuery: fetchBaseQuery({ baseUrl: url,    prepareHeaders: (headers) => {
    headers.set('ngrok-skip-browser-warning', 'true');
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
    return headers;
  }}),
  endpoints: (builder) => ({
    feedBack: builder.mutation({

      query: (body) =>({
        url:"/feedback/addFeedback",
        method:"POST",
        body
        
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFeedBackMutation } = feedBack