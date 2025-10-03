// file to handle operations with getting/updating/deleting/etc. events --- crud operations
const { pool } = require("../config/database.js");


const eventsController = {
    getAllEvents : async function(req, res) {
        try {
        const result = await pool.query(`SELECT e.*, s.name AS stadium_name
             FROM events e
             LEFT JOIN stadiums s ON s.id = e.stadium_id
             ORDER BY e.date, e.time`);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error('Error fetching events:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
    },
    getEventById: async function(req, res) {
        const { id } = req.params;
        try {
            const result = await pool.query(`SELECT e.*, s.name AS stadium_name
                 FROM events e
                 LEFT JOIN stadiums s ON s.id = e.stadium_id
                 WHERE e.id = $1`, [id]);
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'Event not found' });
            }
            res.status(200).json(result.rows[0]);
        } catch (err) {
            console.error(`Error fetching event with id ${id}:`, err);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    getEventsByStadium: async function(req, res) {
        const { stadium_id } = req.params;
        try {
            const result = await pool.query('SELECT * FROM events WHERE stadium_id = $1 ORDER BY date, time', [stadium_id]);
            res.status(200).json(result.rows);
        } catch (err) {
            console.error(`Error fetching events for stadium_id ${stadium_id}:`, err);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    createEvent: async function(req, res) {
        const { team1_name, team2_name, team1_logo, team2_logo, date, time, stadium, sport } = req.body;
        try {
            const result = await pool.query(
                'INSERT INTO events (team1_name, team2_name, team1_logo, team2_logo, date, time, stadium, sport) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
                [team1_name, team2_name, team1_logo, team2_logo, date, time, stadium, sport]
            );
            res.status(201).json(result.rows[0]);
        } catch (err) {
            console.error('Error creating event:', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    deleteEvent: async function(req, res) {
        const { id } = req.params;
        try {
            const result = await pool.query('DELETE FROM events WHERE id = $1 RETURNING *', [id]);
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'Event not found' });
            }
            res.status(204).send();
        } catch (err) {
            console.error(`Error deleting event with id ${id}:`, err);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
};

module.exports = { eventsController };

