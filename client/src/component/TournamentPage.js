// TournamentPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Tournament.css'; // Import your CSS file

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
    <div className="tournament-page">
      <h1 className="tournament-heading">{tournament.name}</h1>

      {groups.map((group, index) => (
        <div key={index} className="group-container">
          <h2 className="group-heading">Group {index + 1}</h2>
          <table className="team-table">
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Abbreviation</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {group.teams.map((team) => (
                <tr key={team.id}>
                  <td>{team.name}</td>
                  <td>
                    {/* Link to the team profile page */}
                    <Link to={`/team-profile/${team.abbreviation}`}>{team.abbreviation}</Link>
                  </td>
                  <td>{team.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default TournamentPage;
