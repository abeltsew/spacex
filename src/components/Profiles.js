import { useSelector } from 'react-redux';

import './profile.css';

const Profiles = () => {
  const { missions } = useSelector((store) => store.mission);

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
      </div>
    </div>
  );
};

export default Profiles;
