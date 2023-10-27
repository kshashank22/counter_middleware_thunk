import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "../actions/constants";

export const fetchedData = createAsyncThunk("api", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = await response.json();
  return data;
});

const apiSlice = createSlice({
  name: "apiList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchedData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchedData.fulfilled, (state, action) => {
        state.status = "success";
        state.list = action.payload;
      })
      .addCase(fetchedData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
