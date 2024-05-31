import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { allTour } from '../service/allTours/AllTours'
import { feedBack } from '../service/feedBack/Feedback'
import { addFavouriteTour } from '../service/favourite/AddFavourite'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [allTour.reducerPath]: allTour.reducer,
    [feedBack.reducerPath]: feedBack.reducer,
    [addFavouriteTour.reducerPath]: addFavouriteTour.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allTour.middleware)
  .concat(feedBack.middleware)
  .concat(addFavouriteTour.middleware)
  ,
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)