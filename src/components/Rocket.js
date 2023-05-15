import React from 'react';
import propTypes from 'prop-types';

const Rocket = ({ rocketInfo }) => (
  <div>
    <img src={rocketInfo.flickr_images} alt={rocketInfo.rocket_name} />
    <div>
      <h2>{rocketInfo.rocket_name}</h2>
      <p>{rocketInfo.description}</p>
      <button type="button">Reserve Rocket</button>
    </div>
  </div>
);

export default Rocket;

Rocket.propTypes = {
  rocketInfo: propTypes.oneOfType([propTypes.object]).isRequired,
};
