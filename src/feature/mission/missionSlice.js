import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMissions = createAsyncThunk('get/missions', async () => {
  const mission = await axios.get('https://api.spacexdata.com/v3/missions');
  return mission.data;
});
const initialState = {
  missions: [],
  joinedMissions: [],
  isMissionLoading: true,
  missionError: undefined,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    toogleMission: (state, { payload }) => {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== payload) return { ...mission };
        return { ...mission, reserved: !mission.reserved };
      });
      return { ...state, missions: newState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => {
      state.isMissionLoading = true;
    });
    builder.addCase(getMissions.fulfilled, (state, { payload }) => {
      state.isMissionLoading = false;
      const filteredMissions = [];
      payload.map((info) => filteredMissions.push({
        mission_id: info.mission_id,
        mission_name: info.mission_name,
        description: info.description,
        reserved: false,
      }));
      state.missions = filteredMissions;
    });
    builder.addCase(getMissions.rejected, (state, [payload]) => {
      state.missionError = payload;
    });
  },
});

export const { toogleMission } = missionSlice.actions;
export default missionSlice.reducer;
