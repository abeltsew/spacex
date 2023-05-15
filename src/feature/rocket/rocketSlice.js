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
  reducers: {
    makeReservation: (state, { payload }) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id === payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      state.rockets = newState;
    },
    cancelReservation: (state, { payload }) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id === payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      state.rockets = newState;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getRockets.pending, (state) => {
      state.isRocketLoading = true;
    });
    builder.addCase(getRockets.fulfilled, (state, { payload }) => {
      state.isRocketLoading = false;
      const filteredRocketArrays = payload.map((item) => ({
        id: item.id,
        rocket_name: item.name,
        description: item.description,
        flickr_images: item.flickr_images[0],
      }));
      state.rockets = filteredRocketArrays;
    });
    builder.addCase(getRockets.rejected, (state) => {
      state.isRocketLoading = false;
      state.rocketError = true;
    });
  },
});

export default rocketSlice.reducer;
export const { makeReservation, cancelReservation } = rocketSlice.actions;
