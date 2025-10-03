import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <h1 className="home-heading">Welcome to the Sports Tracker</h1>
      <p className="home-subheading">Keep up with what's going on in the sporting world by tracking events and stadiums. Hit the events tab to get exploring</p>
      <div className="athlete-image-container">
        <img
          src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4036378.png&w=350&h=254"
          alt="Athlete"
          className="athlete-image"
        />
        <img
          src="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
          alt="Athlete"
          className="athlete-image"
        />
        <img
          src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4431452.png"
          alt="Athlete"
          className="athlete-image"
        />


      </div>
      

    </div>
  );
};

export default Home;
