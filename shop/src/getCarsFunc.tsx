import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICars } from "./Types/types";

export const getCars = createAsyncThunk<
  { category: "recent" | "popular"; data: ICars[] },
  "recent" | "popular"
>("cars/getCars", async (category) => {
  const urlBase = "https://6790b4e0af8442fd73775266.mockapi.io/cars";
  const url =
    category === "recent"
      ? `${urlBase}?page=2&limit=8`
      : `${urlBase}?page=1&limit=8`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Ошибка: ${res.status}`);
  }

  const data = await res.json();
  return { category, data };
});
export const getHeaderCars = createAsyncThunk<ICars[]>(
  "cars/getHeaderCars",
  async () => {
    const url =
      "https://6790b4e0af8442fd73775266.mockapi.io/cars?page=1&limit=3";
    const res = await fetch(url);
    if (!res.ok) throw new Error("Ошибка при загрузке карточек для Header");
    return await res.json();
  }
);
