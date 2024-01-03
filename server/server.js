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

app.get('/api/team-result', async (req, res) => {
  try {
    const apiURL = 'https://api.sportradar.com/cricket-t2/en/tournaments/sr:tournament:2472/results.json?api_key=mpryhb3bfh347t8qrprjqrgg';
    const response = await axios.get(apiURL);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/srh-match', async (req, res) => {
  try {
    const apiURL = 'https://api.sportradar.com/cricket-t2/en/teams/sr:competitor:152316/results.json?api_key=mpryhb3bfh347t8qrprjqrgg';
    const response = await axios.get(apiURL);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/api/rcb-match', async (req, res) => {
  try {
    const apiURL = 'https://api.sportradar.com/cricket-t2/en/teams/sr:competitor:152318/results.json?api_key=mpryhb3bfh347t8qrprjqrgg';
    const response = await axios.get(apiURL);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/api/mi-match', async (req, res) => {
  try {
    const apiURL = 'https://api.sportradar.com/cricket-t2/en/teams/sr:competitor:152324/results.json?api_key=mpryhb3bfh347t8qrprjqrgg';
    const response = await axios.get(apiURL);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/api/kkr-match', async (req, res) => {
  try {
    const apiURL = 'https://api.sportradar.com/cricket-t2/en/teams/sr:competitor:152326/results.json?api_key=mpryhb3bfh347t8qrprjqrgg';
    const response = await axios.get(apiURL);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/api/pbks-match', async (req, res) => {
  try {
    const apiURL = 'https://api.sportradar.com/cricket-t2/en/teams/sr:competitor:152330/results.json?api_key=mpryhb3bfh347t8qrprjqrgg';
    const response = await axios.get(apiURL);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/api/rr-match', async (req, res) => {
  try {
    const apiURL = 'https://api.sportradar.com/cricket-t2/en/teams/sr:competitor:152320/results.json?api_key=mpryhb3bfh347t8qrprjqrgg';
    const response = await axios.get(apiURL);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/api/csk-match', async (req, res) => {
  try {
    const apiURL = 'https://api.sportradar.com/cricket-t2/en/teams/sr:competitor:152334/results.json?api_key=mpryhb3bfh347t8qrprjqrgg';
    const response = await axios.get(apiURL);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/api/dc-match', async (req, res) => {
  try {
    const apiURL = 'https://api.sportradar.com/cricket-t2/en/teams/sr:competitor:152332/results.json?api_key=mpryhb3bfh347t8qrprjqrgg';
    const response = await axios.get(apiURL);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/api/gt-match', async (req, res) => {
  try {
    const apiURL = 'https://api.sportradar.com/cricket-t2/en/teams/sr:competitor:877927/results.json?api_key=mpryhb3bfh347t8qrprjqrgg';
    const response = await axios.get(apiURL);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/api/lsg-match', async (req, res) => {
  try {
    const apiURL = 'https://api.sportradar.com/cricket-t2/en/teams/sr:competitor:877929/results.json?api_key=mpryhb3bfh347t8qrprjqrgg';
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
