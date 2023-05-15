import { configureStore } from '@reduxjs/toolkit';
import missionReducer from '../feature/mission/missionSlice';
import rocketReducer from '../feature/rocket/rocketSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
    rocket: rocketReducer,
  },
});

export default store;
