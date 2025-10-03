const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const favicon = require('serve-favicon');
const eventRouter = require('./routes/events');
const stadiumRouter = require('./routes/stadiums');

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(favicon(path.resolve('./', 'client', 'public', 'sports_image.jpg')));
app.use('/api/events', eventRouter);
app.use('/api/stadiums', stadiumRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});