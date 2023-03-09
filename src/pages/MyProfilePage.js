import React from "react";
import "../styles.css";

function MyProfilePage() {

  return (
    <div className="main-wrap">
      <div className="list-wrap">
        <h3>My Missions</h3>
        <table className="bordered rounded" />
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
