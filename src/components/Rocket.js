import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { makeReservation } from '../feature/rocket/rocketSlice';

import './Rocket.css';

const Rocket = ({ rocketInfo }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    console.log('clicked');
    dispatch(makeReservation(rocketInfo.id));
  };
  return (
    <div className="rocket">
      <img src={rocketInfo.flickr_images} alt={rocketInfo.rocket_name} />
      <div className="rocket-info">
        <h2>{rocketInfo.rocket_name}</h2>
        <p>{rocketInfo.description}</p>
        <button type="button" onClick={clickHandler}>
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

export default Rocket;

Rocket.propTypes = {
  rocketInfo: propTypes.oneOfType([propTypes.object]).isRequired,
};
