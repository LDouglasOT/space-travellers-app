import React from "react";
import "../styles.css";
import { useSelector } from "react-redux";

const getReseved = (rocket) => {
  if (rocket.reserved) {
    return (
      <tr key={rocket}>
        <td className="separator">{rocket.rocket_name}</td>
      </tr>
    );
  }
  return null;
};
const getActiveMissions = (mission) => {
  if (mission.active) {
    return (
      <tr key={mission}>
        <td className="separator">{mission.mission_name}</td>
      </tr>
    );
  }
  return null;
};
function MyProfilePage() {
  const { rockets } = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.mission);
  return (
    <div className="main-wrap">
      <div className="list-wrap">
        <h3>My Missions</h3>
        <table className="bordered rounded">
          {missions.map((mission) => (
            getActiveMissions(mission)
          ))}
        </table>
      </div>
      <div className="list-wrapx">
        <h3>My Rockets</h3>
        <table className="bordered rounded">
          {rockets.map((rocket) => (
            getReseved(rocket)
          ))}
        </table>
      </div>
    </div>
  );
}

export default MyProfilePage;
