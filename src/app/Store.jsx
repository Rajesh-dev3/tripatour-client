import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { allTour } from '../service/allTours/AllTours'
import { feedBack } from '../service/feedBack/Feedback'
import { addFavouriteTour } from '../service/favourite/AddFavourite'
import { detail } from '../service/detailPage/Detail'
import { experience } from '../service/experience/Experience'
import { houseRule } from '../service/houseRule/HouseRule'
import { enquiryForm } from '../service/enquiry/Enquiry'
import { allPackages } from '../service/allPackages/AllPackages'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [allTour.reducerPath]: allTour.reducer,
    [feedBack.reducerPath]: feedBack.reducer,
    [addFavouriteTour.reducerPath]: addFavouriteTour.reducer,
    [detail.reducerPath]: detail.reducer,
    [experience.reducerPath]: experience.reducer,
    [houseRule.reducerPath]: houseRule.reducer,
    [enquiryForm.reducerPath]: enquiryForm.reducer,
    [allPackages.reducerPath]: allPackages.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allTour.middleware)
  .concat(feedBack.middleware)
  .concat(detail.middleware)
  .concat(experience.middleware)
  .concat(houseRule.middleware)
  .concat(enquiryForm.middleware)
  .concat(allPackages.middleware)
  .concat(addFavouriteTour.middleware)
  ,
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)