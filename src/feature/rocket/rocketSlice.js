import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRockets = createAsyncThunk('get/rockets', async () => {
  const rockets = await axios.get('https://api.spacexdata.com/v4/rockets');

  return rockets.data;
});

const initialState = {
  rockets: [],
  isRocketLoading: true,
  rocketError: undefined,
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  // reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getRockets.pending, (state) => {
      state.isRocketLoading = true;
    });
    builder.addCase(getRockets.fulfilled, (state, { payload }) => {
      state.isRocketLoading = false;
      // console.log(payload);
      state.rockets = payload;
    });
  },
});

export default rocketSlice.reducer;
