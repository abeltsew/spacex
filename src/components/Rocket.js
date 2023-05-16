import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { makeReservation, cancelReservation } from '../feature/rocket/rocketSlice';

import './Rocket.css';

const Rocket = ({ rocketInfo }) => {
  const dispatch = useDispatch();

  const reservationHandler = () => {
    dispatch(makeReservation(rocketInfo.id));
  };

  const cancelReservationHandler = () => {
    dispatch(cancelReservation(rocketInfo.id));
  };

  return (
    <div className="rocket">
      <img src={rocketInfo.flickr_images} alt={rocketInfo.rocket_name} />
      <div className="rocket-info">
        <h2>{rocketInfo.rocket_name}</h2>
        {rocketInfo.reserved && (
          <div>
            <p>
              <button type="submit" className="btn-reserved">
                Reserved
              </button>
              {rocketInfo.description}
            </p>

            <button
              type="button"
              className="btn-cancel"
              onClick={cancelReservationHandler}
            >
              Cancel Reservation
            </button>
          </div>
        )}
        {!rocketInfo.reserved && (
          <div>
            <p>{rocketInfo.description}</p>
            <button
              type="button"
              className="btn-reserve"
              onClick={reservationHandler}
            >
              Reserve Rocket
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rocket;

Rocket.propTypes = {
  rocketInfo: propTypes.oneOfType([propTypes.object]).isRequired,
};
