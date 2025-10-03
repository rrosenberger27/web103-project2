const { resetData } = require('./reset_data.js');
const { pool }  = require('./database.js')

const resetDb = async () => {
    try {
        const createStadiumsTableQuery = `
        DROP TABLE IF EXISTS stadiums;
        CREATE TABLE stadiums (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) UNIQUE NOT NULL
        );
        `;
        const createEventsTableQuery = `
        DROP TABLE IF EXISTS events;
        CREATE TABLE events (
            id SERIAL PRIMARY KEY,
            team1_name VARCHAR(100) NOT NULL,
            team2_name VARCHAR(100) NOT NULL,
            team1_logo TEXT NOT NULL,
            team2_logo TEXT NOT NULL,
            date VARCHAR(20) NOT NULL,
            time VARCHAR(20),
            stadium_id INT,
            city VARCHAR(100) NOT NULL,
            sport VARCHAR(50) NOT NULL,
            FOREIGN KEY (stadium_id) REFERENCES stadiums(id) ON DELETE SET NULL
        );`;

    await pool.query(createStadiumsTableQuery);
    console.log("✅ Stadiums table created successfully.");
    await pool.query(createEventsTableQuery);
    console.log("✅ Events table created successfully.");

    const insert_and_get_stadium_id = async (stadium_name) => {
        try {
            const insertQuery = 'INSERT INTO stadiums (name) VALUES ($1) ON CONFLICT (name) DO NOTHING RETURNING id';
            const selectQuery = 'SELECT id FROM stadiums WHERE name = $1';
    
            // Try to insert the stadium
            const insertResult = await pool.query(insertQuery, [stadium_name]);
            if (insertResult.rows.length > 0) {
                return insertResult.rows[0].id; // Return the newly inserted id
            } else {
                // If the stadium already exists, fetch its id
                const selectResult = await pool.query(selectQuery, [stadium_name]);
                return selectResult.rows[0].id; // Return the existing id
            }
        } catch (err) {
            console.error(`Error inserting or fetching stadium ${stadium_name}:`, err);
            throw err;
        }
    }

    const insertQuery = `
    INSERT INTO events (team1_name, team2_name, team1_logo, team2_logo, date, time, stadium_id, city, sport)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);
    `;

    resetData.forEach(async (event) => {
        const values = [
            event.team1_name,
            event.team2_name,
            event.team1_logo,
            event.team2_logo,
            event.date,
            event.time || null,
            event.stadium,
            event.city,
            event.sport
        ];

        try {
            const stadium_id = await insert_and_get_stadium_id(event.stadium);
            values[6] = stadium_id; // Update the stadium_id in values array
            await pool.query(insertQuery, values);
            console.log(`match of ${event.team1_name} vs ${event.team2_name} inserted successfully. ✅`);
        } catch (err) {
            console.error(`Error inserting match of ${event.team1_name} vs ${event.team2_name}:`, err);
        }
    });
}  catch (err) {
    console.error(`Error resetting database:`, err);
}
};

resetDb();