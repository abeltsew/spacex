import { useSelector } from 'react-redux';

import './profile.css';

const Profiles = () => {
  const { mission, rocket } = useSelector((store) => store);
  const { missions } = mission;
  const { rockets } = rocket;

  const subscriptions = missions.filter((mission) => mission.reserved === true);

  const renderMission = () => (
    <table className="mission-list">
      {subscriptions.map((sub) => (
        <tr className="mission-item" key={sub.mission_id}>
          {sub.mission_name}
        </tr>
      ))}
    </table>
  );

  return (
    <div className="profile-container">
      <div className="mission-info">
        <h2>My Mission</h2>
        {renderMission()}
      </div>
      <div className="rocket-info">
        <h2>My Rockets</h2>
        {rockets
          .filter((rocket) => rocket.reserved)
          .map((rocket, i) => (
            <div key={rocket.id} className="reserved-rockets">
              <h4>{i + 1}</h4>
              <p className="reserved-name">{rocket.rocket_name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profiles;
