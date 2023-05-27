import React from "react";
import "../styles.css";
import { useSelector } from "react-redux";

function MyProfilePage() {
  const { rockets } = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.mission);

  const rocketsReserved = rockets.filter((roc) => roc.reserved === true);
  const missionsJoined = missions.filter((mission) => mission.join === true);

  let rocketsReservedLi;
  let missionsJoinedLi;

  if (rocketsReserved.length === 0) {
    rocketsReservedLi = (
      <p style={{ marginLeft: "2rem", marginBottom: "2rem" }}>
        No reserved rocket to display.
      </p>
    );
  } else {
    rocketsReservedLi = rocketsReserved.map((r) => (
      <li key={r.id}>{r.rocket_name}</li>
    ));
  }

  if (missionsJoined.length === 0) {
    missionsJoinedLi = (
      <p style={{ marginLeft: "2rem", marginBottom: "2rem" }}>
        No missions joined to display.
      </p>
    );
  } else {
    missionsJoinedLi = missionsJoined.map((m) => (
      <li key={m.mission_id}>{m.mission_name}</li>
    ));
  }

  return (
    <div className="main-wrap">
      <div className="list-wrap">
        <h3>My Missions</h3>
        <table className="bordered rounded">{missionsJoinedLi}</table>
      </div>
      <div className="list-wrapx">
        <h3>My Rockets</h3>
        <table className="bordered rounded">{rocketsReservedLi}</table>
      </div>
    </div>
  );
}

export default MyProfilePage;
