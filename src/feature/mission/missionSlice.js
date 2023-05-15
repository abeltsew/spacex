import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMissions = createAsyncThunk('get/missions', async () => {
  const mission = await axios.get('https://api.spacexdata.com/v3/missions');
  return mission.data;
});
const initialState = {
  missions: [],
  isMissionLoading: true,
  missionError: undefined,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => {
      state.isMissionLoading = true;
    });
    builder.addCase(getMissions.fulfilled, (state, { payload }) => {
      state.isMissionLoading = false;
      const filteredMissions = [];
      payload.map((info) =>
        filteredMissions.push({
          mission_id: info.mission_id,
          mission_name: info.mission_name,
          description: info.description,
        })
      );
      state.mission = filteredMissions;
    });
    builder.addCase(getMissions.rejected, (state, [payload]) => {
      state.missionError = payload;
    });
  },
});

export default missionSlice.reducer;
