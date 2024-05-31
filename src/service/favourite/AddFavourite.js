// 



import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const url = import.meta.env.VITE_BASE_URL;
export const addFavouriteTour = createApi({
  reducerPath: "addFavouriteTour",

  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  tagTypes:["fav"],
  endpoints: (builder) => ({
    addFavouriteTour: builder.mutation({
      query: (body) => ({
        url: "/FavTour/addFav",
        method: "POST",
        body
      }),
      invalidatesTags:["fav"]
    }),
    getFavoriteTour: builder.query({
      query: (body) => ({
        url: "/FavTour/getAllFavoriteTours",
        method: "GET",
        body
      }),
      providesTags:["fav"]
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddFavouriteTourMutation,useGetFavoriteTourQuery } = addFavouriteTour;
