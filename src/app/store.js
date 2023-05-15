import { configureStore } from '@reduxjs/toolkit';
import missionReducer from '../feature/mission/missionSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
  },
});

export default store;
