import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const { getMissions } = require('../redux/mission/missionSlice');

function MissionsPage() {
  const { missions } = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <div className="missions-wrap">
      <table className="bordered rounded">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission} className="separator">
              <td className="separator">{mission.mission_name}</td>
              <td className="separator">{mission.description}</td>
              <td className="separator">{mission.active ? <span className="pill">Not A Member</span> : <span className="pills">Active Member</span>}</td>
              <td className="separator">{mission.active ? <span className="pillsx">Join Mission</span> : <span className="pillsxx">Leave Mission</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MissionsPage;
