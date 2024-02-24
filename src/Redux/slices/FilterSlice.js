import { createSlice } from "@reduxjs/toolkit";


  const initialState = {
    counterD: 0,
    sort: {
      name: 'популярности',
      cortCotigory: 'rating',
    }
  }


export const filterSlice = createSlice({
  name: 'filtres',
  initialState,
  reducers: {
    setCategoty(state,action) {
      state.cotegory = action.payload
    },
  }
})

export const {reducer,actions} = filterSlice