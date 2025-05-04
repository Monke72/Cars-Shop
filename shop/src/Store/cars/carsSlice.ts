import { createSlice } from "@reduxjs/toolkit";
import { getCars, getHeaderCars } from "../../getCarsFunc";
import { ICars } from "../../Types/types";

interface CarsState {
  recent: ICars[];
  popular: ICars[];
  header: ICars[];
  all: ICars[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CarsState = {
  recent: [],
  popular: [],
  header: [],
  all: [],
  status: "idle",
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCars.fulfilled, (state, action) => {
        const { category, data } = action.payload;

        // Обновление указанной категории
        state[category] = data;

        // Обновление all без дублей по id
        const newCars = data.filter(
          (car) => !state.all.some((existing) => existing.id === car.id)
        );
        state.all.push(...newCars);

        state.status = "succeeded";
      })
      .addCase(getCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Ошибка загрузки";
      })
      .addCase(getHeaderCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getHeaderCars.fulfilled, (state, action) => {
        state.header = action.payload;

        // Также добавим их в all (если ещё не добавлены)
        const newCars = action.payload.filter(
          (car) => !state.all.some((existing) => existing.id === car.id)
        );
        state.all.push(...newCars);

        state.status = "succeeded";
      })
      .addCase(getHeaderCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Ошибка загрузки хедера";
      });
  },
});

export const cartReducer = carsSlice.reducer;
