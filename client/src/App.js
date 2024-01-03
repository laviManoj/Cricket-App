// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TournamentPage from './component/TournamentPage';
import TeamProfilePage from './component/TeamProfilePage';
import TeamResultPage from './component/TeamResult'
import TeamResultRCB from './component/TeamProfileRCB'
import TeamResultMI from './component/TeamProfileMI'
import TeamResultCSK from './component/TeamProfileCSK'
import TeamResultRR from './component/TeamProfileRR'
import TeamResultGT from './component/TeamProfileGT'
import TeamResultLSG from './component/TeamProfileLSG'
import TeamResultDC from './component/TeamProfileDC'
import TeamResultPBKS from './component/TeamProfilePBKS'
import TeamResultKKR from './component/TeamProfileKKR'


const App = () => {
  return (
  
    <Router>
      <Routes>
     
        <Route path="/" element={<TournamentPage />} />
        <Route path="/team-profile-SRH/" element={<TeamProfilePage />} />
        <Route path="/team-profile-RCB/" element={<TeamResultRCB />} />
        <Route path="/team-profile-CSK/" element={<TeamResultCSK />} />
        <Route path="/team-profile-RR/" element={<TeamResultRR />} />
        <Route path="/team-profile-GT/" element={<TeamResultGT />} />
        <Route path="/team-profile-LSG/" element={<TeamResultLSG />} />
        <Route path="/team-profile-MI/" element={<TeamResultMI />} />
        <Route path="/team-profile-DC/" element={<TeamResultDC />} />
        <Route path="/team-profile-PBKS/" element={<TeamResultPBKS />} />
        <Route path="/team-profile-KKR/" element={<TeamResultKKR />} />



        <Route path="/toss-update" element={<TeamResultPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
