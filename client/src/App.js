// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TournamentPage from './component/TournamentPage';
import TeamProfilePage from './component/TeamProfilePage';

const App = () => {
  return (
  
    <Router>
      <Routes>
     
        <Route path="/" element={<TournamentPage />} />
        <Route path="/team-profile/:abbreviation" element={<TeamProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
