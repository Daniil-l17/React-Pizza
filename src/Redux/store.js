import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/FilterSlice";

  const addreducer = combineReducers({
    categoryID: reducer
  })

export const stored = configureStore({
  reducer: {
    counter: addreducer
  }
})