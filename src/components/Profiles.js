import { useSelector } from 'react-redux';

import './profile.css';

const Profiles = () => {
  const { missions, joinedMissions } = useSelector((store) => store.mission);

  const renderMission = () => {
    if (joinedMissions.length === 0) {
      return <h2>No Mission Subscribed!</h2>;
    }
    return (
      <table className="mission-list">
        {missions.map((mission) => {
          if (joinedMissions.includes(mission.mission_id)) {
            return (
              <tr className="mission-item" key={mission.mission_id}>
                {mission.mission_name}
              </tr>
            );
          }
        })}
      </table>
    );
  };

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
