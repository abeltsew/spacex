import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, toogleMission } from '../feature/mission/missionSlice';

import './mission.css';

const Mission = () => {
  const { missions, isMissionLoading, missionError } = useSelector(
    (store) => store.mission,
  );
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
          <tr>
            <th className="table-header">Mission</th>
            <th className="table-header">Description</th>
            <th className="table-header">Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions?.map((m, i) => (
            <tr className={`${i % 2 === 0 ? 'shaded' : ''}`} key={m.mission_id}>
              <td className="mission-name">{m.mission_name}</td>
              <td className="mission-description">{m.description}</td>
              {!m.reserved ? (
                <td className="status">
                  <p className="not-member">Not A Member</p>
                </td>
              ) : (
                <td className="status">
                  <p className="active-member">Active Member</p>
                </td>
              )}
              {!m.reserved ? (
                <td className="action">
                  <button
                    className="join-mission-btn"
                    type="button"
                    onClick={() => dispatch(toogleMission(m.mission_id))}
                  >
                    Join Mission
                  </button>
                </td>
              ) : (
                <td className="action">
                  <button
                    className="leave-mission-btn"
                    type="button"
                    onClick={() => dispatch(toogleMission(m.mission_id))}
                  >
                    leave Mission
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
