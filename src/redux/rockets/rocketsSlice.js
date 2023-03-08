/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "https://api.spacexdata.com/v3/rockets";

export const getRockets = createAsyncThunk(
  "rockets/getRockets",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${API_URL}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || "Something went wrong!"
      );
    }
  }
);

const initialState = {
  isLoading: false,
  rockets: [],
};

const rocketsSlice = createSlice({
  name: "rockets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get rockets
    builder
      .addCase(getRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        const res = action.payload;

        console.log("CHECKING DATA=> ", res);

        state.rockets = res;
      })
      .addCase(getRockets.rejected, (state, payload) => {
        state.isLoading = false;
        console.log("There was an error,", payload);
      });
  },
});

export const rocketsActions = rocketsSlice.actions;
export default rocketsSlice.reducer;
