import React from "react";  
import '../styles/eventCard.css';

const EventCard = ({ event }) => {
    const { id, team1_name, team2_name, team1_logo, team2_logo, date, time, stadium_id, stadium_name, city, sport } = event;

  return (
    <div className="event-card">
      <div className="team-info">
        <img src={team1_logo} alt={`${team1_name} logo`} className="team-logo" />
        <h2 className="team-name">{team1_name}</h2>
      </div>
      <div className="match-info">
        <p className="match-time">{date} at {time}</p>
        <p className="match-stadium">{stadium_name}, {city}</p>
      </div>
      <div className="team-info">
        <img src={team2_logo} alt={`${team2_name} logo`} className="team-logo" />
        <h2 className="team-name">{team2_name}</h2>
      </div>
    </div>
  );
};

export default EventCard;