import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { getRockets } from '../feature/rocket/rocketSlice';

const RocketList = () => {
  const { rockets, isRocketLoading, rocketError } = useSelector(
    (state) => state.rocket,
  );

  console.log(rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) dispatch(getRockets());
  }, []);

  if (isRocketLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (rocketError) {
    return (
      <div>
        <p>There was an error</p>
      </div>
    );
  }

  return (
    <div>
      {rockets.map((rocket) => (
        <Rocket key={rocket.id} rocketInfo={rocket} />
      ))}
    </div>
  );
};

export default RocketList;
