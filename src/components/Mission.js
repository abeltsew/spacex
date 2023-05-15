import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMissions,
  joinMission,
  leaveMission,
} from '../feature/mission/missionSlice';

import './mission.css';

const Mission = () => {
  const { missions, isMissionLoading, missionError, joinedMissions } =
    useSelector((store) => store.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  if (isMissionLoading) {
    return <div>Loading ...</div>;
  }

  if (missionError) {
    return <div>something went wrong</div>;
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th />
        </thead>
        <tbody>
          {missions.map((m, i) => {
            return (
              <tr
                className={`${i % 2 === 0 ? 'shaded' : ''}`}
                key={m.mission_id}
              >
                <td>{m.mission_name}</td>
                <td>{m.description}</td>
                {!joinedMissions?.includes(m.mission_id) ? (
                  <td className="not-member"> Not A Member</td>
                ) : (
                  <td className="Active-member">Active Member</td>
                )}
                {!joinedMissions?.includes(m.mission_id) ? (
                  <td>
                    <button onClick={() => dispatch(joinMission(m.mission_id))}>
                      Join Mission
                    </button>
                  </td>
                ) : (
                  <td>
                    <button
                      onClick={() => dispatch(leaveMission(m.mission_id))}
                    >
                      leave Mission
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
