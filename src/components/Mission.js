import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../feature/mission/missionSlice';

const Mission = () => {
  const { mission, isMissionLoading, missionError } = useSelector(
    (store) => store.mission,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!mission) {
      dispatch(getMissions());
    }
  }, []);

  if (isMissionLoading) {
    return <div>Loading ...</div>;
  }

  if (missionError) {
    return <div>something went wrong</div>;
  }

  return <div>{JSON.stringify(mission, null, 2)}</div>;
};

export default Mission;
