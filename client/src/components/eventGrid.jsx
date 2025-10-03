import React from "react";
import "../styles/eventGrid.css";
import EventCard from "./eventCard.jsx";

const EventGrid = ({ events }) => {

  return (
    <div className="event-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
    </div>
  );
};

export default EventGrid;
