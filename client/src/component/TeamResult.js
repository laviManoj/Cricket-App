// TeamResultPage.jsx
import React, { useEffect, useState } from 'react';
import './TeamResult.css'

const TeamResultPage = () => {
  const [teamResultData, setTeamResultData] = useState(null);

  useEffect(() => {
    const fetchTeamResultData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/team-result');
        const data = await response.json();
        console.log(data)
        setTeamResultData(data);
      } catch (error) {
        console.error('Error fetching team result data:', error);
      }
    };

    fetchTeamResultData();
  }, []);

  if (!teamResultData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="team-result-page">
      <h1 className='result-heading'>Team Scheduled Page</h1>

      <table className="result-table">
        <thead>
          <tr>
            
            
            <th>Scheduled</th>
            <th>Tournament Type</th>
            <th>Competitor 1</th>
            <th>Competitor 2</th>
            <th>Venue Name</th>
            <th>City Name</th>
            <th>Toss Decision</th>
          </tr>
        </thead>
        <tbody>
          {teamResultData.results.map((result, index) => (
            <tr key={index}>
              
              {/* <td>{result.sport_event.season.start_date}</td> */}
              <td>{result.sport_event.scheduled}</td>
              <td>{result.sport_event.tournament.type}</td>
              <td>{result.sport_event.competitors[0].name}</td>
              <td>{result.sport_event.competitors[1].name}</td>
              <td>{result.sport_event.venue.name}</td>
              <td>{result.sport_event.venue.city_name}</td>
              <td>{result.sport_event_status.toss_decision}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamResultPage;
