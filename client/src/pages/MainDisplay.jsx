import React from 'react';
import '../styles/MainDisplay.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EventGrid from '../components/eventGrid.jsx';
import Dropdown from '../components/dropdown';
import { useNavigate } from 'react-router-dom';


const MainDisplay = () => {
    const [allEvents, setAllEvents] = useState([]);
    const [events, setEvents] = useState([]);
    const [stadiums, setStadiums] = useState([]);
    const [selectedSport, setSelectedSport] = useState('all');
    const [selectedStadium, setSelectedStadium] = useState('all');  
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('/api/events');
                setEvents(response.data);
                setAllEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        const fetchStadiums = async () => {
            try {
                const response = await axios.get('/api/stadiums');
                let newStadiums = response.data;
                newStadiums.push({ id: 'all', name: 'All Stadiums' });
                setStadiums(newStadiums);
            } catch (error) {
                console.error('Error fetching stadiums:', error);
            }
        };
        fetchStadiums();
        fetchEvents();
    }, []);
    const handleSportSelect = (value) => {
        setSelectedSport(value);
    };

    const handleStadiumSelect = (value) => {
        setSelectedStadium(value);
        if (value !== 'all') {
            navigate(`/stadiums/${value}`);
        }
    };

    useEffect(() => {
        const filterEventsBySport = async () => {
            try {
                const newEvents = allEvents.filter(event => selectedSport === 'all' || event.sport.toLowerCase() === selectedSport.toLowerCase());
                setEvents(newEvents);
 
            } catch (error) {
                console.error('Error fetching filtered events:', error);
            }
        };
        filterEventsBySport();
    }, [selectedSport]);
  return (
    <div className="main-display">
      <h2 className="main-title">EVENTS</h2>
      <p className='main-description'>Toggle the filters to refine your search!</p>

      <div className="filter-container">
        <Dropdown
          options={[
            { value: 'all', label: 'All Sports' },
            { value: 'soccer', label: 'Soccer' },
            { value: 'basketball', label: 'Basketball' },
            { value: 'football', label: 'Football' },
          ]}
          onSelect={handleSportSelect}
        />
    

        <Dropdown
          options={
            stadiums.map(stadium => ({ value: stadium.id, label: stadium.name }))
          }
          onSelect={handleStadiumSelect}
          currValue={selectedStadium}
        />
      </div>
      <EventGrid events={events} />
    </div>
  );
};

export default MainDisplay;