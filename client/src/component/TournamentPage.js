// TournamentPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Tournament.css'; // Import your CSS file
import iplImage from '../assests/IPL1.jpg';

const TournamentPage = () => {
  const [tournamentData, setTournamentData] = useState(null);

  useEffect(() => {
    const fetchTournamentData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/tournament-info');
        const data = await response.json();
        setTournamentData(data);
      } catch (error) {
        console.error('Error fetching tournament data:', error);
      }
    };

    fetchTournamentData();
  }, []);

  if (!tournamentData) {
    return <div>Loading...</div>;
  }

  const { tournament, groups } = tournamentData;

  return (
    <div className="tournament-page" style={{ backgroundImage: `url(${iplImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '100vh', minWidth: '210vh' }}>
      <h1 className="tournament-heading">{tournament.name}</h1>

      {groups.map((group, index) => (
        <div key={index} className="group-container">
          <Link  to="/toss-update"  className="group-heading">Toss Update</Link>
         
          <table className="team-table">
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Abbreviation</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Royal Challengers Bangalore</td>
                <td><Link to={`/team-profile-RCB/`}> RCB</Link></td>
                <td>India</td>
              </tr>
             <tr>
              <td>Sunrisers Hyderabad
              </td>
              <td> <Link to={`/team-profile-SRH/`}> SRH</Link></td>
              <td>India</td>
             </tr>
             <tr>
              <td>Mumbai Indians</td>
              <td><Link to={`/team-profile-MI/`}> MI</Link></td>
              <td>India</td>
             </tr>
             <tr>
              <td>Punjab Kings</td>
              <td><Link to={`/team-profile-PBKS/`}> PBKS</Link></td>
              <td>India</td>
             </tr>
             <tr>
              <td>Rajasthan Royals</td>
              <td><Link to={`/team-profile-RR/`}> RR</Link></td>
              <td>India</td>
             </tr>
             <tr>
              <td>Chennai Super Kings</td>
              <td><Link to={`/team-profile-CSK/`}> CSK</Link></td>
              <td>India</td>
             </tr>
             <tr>
              <td>Delhi Capitals</td>
              <td><Link to={`/team-profile-DC/`}> DC</Link></td>
              <td>India</td>
             </tr>
              <tr>
              <td>Gujarat Titans</td>
              <td><Link to={`/team-profile-GT/`}> GT</Link></td>
              <td>India</td>
             </tr>
             <tr>
              <td>Lucknow Super Giants</td>
              <td><Link to={`/team-profile-LSG/`}> LSG</Link></td>
              <td>India</td>
             </tr>
             <tr>
              <td>Kolkat Night Raiders</td>
              <td><Link to={`/team-profile-KKR/`}> KKR</Link></td>
              <td>India</td>
             </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default TournamentPage;
