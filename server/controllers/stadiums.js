const { pool }  = require("../config/database.js");

const stadiumsController = { 
    getAllStadiums : async function(req, res) {
        try {
            const result = await pool.query('SELECT * FROM stadiums ORDER BY name');
            res.status(200).json(result.rows);
        } catch (err) {
            console.error('Error fetching stadiums:', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    getStadiumById: async function(req, res) {
        const { id } = req.params;
        try {
            const result = await pool.query('SELECT * FROM stadiums WHERE id = $1', [id]);
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'Stadium not found' });
            }
            res.status(200).json(result.rows[0]);
        } catch (err) {
            console.error(`Error fetching stadium with id ${id}:`, err);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
}

module.exports = { stadiumsController };