// mealsSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const mealsSlice = createSlice({
  name: "meals",
  initialState: [
    { name: "Breakfast", cost: 50, selected: false },
    { name: "High Tea", cost: 25, selected: false },
    { name: "Lunch", cost: 65, selected: false },
    { name: "Dinner", cost: 40, selected: false },
  ],
  reducers: {
    toggleMealSelection: (state, action) => {},
  },
});

export const { toggleMealSelection } = mealsSlice.actions;

export default mealsSlice.reducer;
