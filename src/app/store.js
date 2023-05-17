import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import missionReducer from '../feature/mission/missionSlice';
import rocketReducer from '../feature/rocket/rocketSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
    rocket: rocketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
