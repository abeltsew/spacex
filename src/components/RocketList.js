import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { getRockets } from '../feature/rocket/rocketSlice';

const RocketList = () => {
  const { rockets, isRocketLoading, rocketError } = useSelector(
    (state) => state.rocket
  );

  console.log(rockets[0]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  if (isRocketLoading) {
    console.log('loading');
  }

  if (rocketError) {
    console.log('There was an error');
  }

  return (
    <div>
      {rockets.map((rocket) => (
        <Rocket rocketInfo={rocket} />
      ))}
    </div>
  );
};

export default RocketList;

