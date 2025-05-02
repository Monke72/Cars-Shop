import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterBasket {
  arrayId: number[];
}

const initialState: CounterBasket = {
  arrayId: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    pushInBasket: (state, action: PayloadAction<number>) => {
      if (!state.arrayId.includes(action.payload)) {
        state.arrayId.push(action.payload);
      }
    },
    removeFromBasket: (state, action: PayloadAction<number>) => {
      state.arrayId = state.arrayId.filter((item) => item !== action.payload);
    },
  },
});

export const { pushInBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
