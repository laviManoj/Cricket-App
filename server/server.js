// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001; // You can change this port if needed
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.get('/api/tournament-info', async (req, res) => {
  try {
    const apiURL = 'https://api.sportradar.com/cricket-t2/en/tournaments/sr:tournament:2472/info.json?api_key=mpryhb3bfh347t8qrprjqrgg';
    const response = await axios.get(apiURL);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/team-profile', async (req, res) => {
  try {
    const apiURL = 'https://api.sportradar.com/cricket-t2/en/teams/sr:competitor:152316/profile.json?api_key=mpryhb3bfh347t8qrprjqrgg';
    const response = await axios.get(apiURL);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
