import React from "react";
import "../styles/LocationView.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import EventGrid from "../components/eventGrid";

const LocationView = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
  if (!id) return;

  const fetchData = async () => {
    try {
      const [stadiumRes, eventsRes] = await Promise.all([
        axios.get(`/api/stadiums/${id}`),
        axios.get(`/api/events/stadium/${id}`),
      ]);

      const stadiumName = stadiumRes.data?.name ?? "";
      setLocation(stadiumName);

      const eventsArr = Array.isArray(eventsRes.data) ? eventsRes.data : [];
      const eventsWithStadium = eventsArr.map((evt) => ({
        ...evt,
        stadium_name: stadiumName,
      }));

      console.log(eventsWithStadium);

      setEvents(eventsWithStadium);
    } catch (error) {
      console.error("Error fetching location or events:", error);
      setLocation("");
      setEvents([]);
    }
  };

  fetchData();
}, [id]);

  return (
    <div>
        <h2 className="location-title">{location}</h2>
        {events.length === 0 ? (
          <p className="no-events-message">Loading....</p>
        ) : (
          <EventGrid events={events} />
        )}
    </div>
  );
};

export default LocationView;
