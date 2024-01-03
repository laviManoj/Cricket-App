// TeamProfilePage.jsx
import React, { useEffect, useState } from 'react';
import './TeamProfilePage.css';
import SRHImage from '../assests/LSG.jpg';

const TeamProfilePage = () => {
  const [teamProfileData, setTeamProfileData] = useState(null);

  useEffect(() => {
    const fetchTeamProfileData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/lsg-match');
        const data = await response.json();
        // console.log(data)
        setTeamProfileData(data);
      } catch (error) {
        console.error('Error fetching team profile data:', error);
      }
    };

    fetchTeamProfileData();
  }, []);

  if (!teamProfileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="team-profile-page">
      <div className="profile-container">
        <div className="image-container">
          <img src={SRHImage} alt="SRH Team" />
        </div>
        <div className="details-container">
          <h1 className="profile-heading">Team Profile - {teamProfileData.team.name}</h1>
          <table className="profile-table">
            <tbody>
              <tr>
                <th>Generated At</th>
                <td>{teamProfileData.generated_at}</td>
              </tr>
              <tr>
                <th>Team Name</th>
                <td>{teamProfileData.team.name}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{teamProfileData.team.country}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="srh-match-page">
        <h2>SRH Match Data</h2>
        <table>
          <thead>
            <tr>
              <th>Competitor 1</th>
              <th>Competitor 2</th>
              <th>Venue Name</th>
              <th>Scheduled</th>
              <th>Match Status</th>
              <th>City Name</th>
            </tr>
          </thead>
          <tbody>
            {console.log(teamProfileData)}
            {teamProfileData.results && Array.isArray(teamProfileData.results) ? (
              teamProfileData.results.map((result, index) => (
                <tr key={index}>
                  <td>{result.sport_event.competitors[0].name}</td>
                  <td>{result.sport_event.competitors[1].name}</td>
                  <td>{result.sport_event.venue.name}</td>
                  <td>{result.sport_event.scheduled}</td>
                  <td>{result.sport_event_status.match_status}</td>
                  <td>{result.sport_event.venue.city_name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No match data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamProfilePage;
