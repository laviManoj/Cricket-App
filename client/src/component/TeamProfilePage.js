// TeamProfilePage.jsx
import React, { useEffect, useState } from 'react';
import './TeamProfilePage.css'

const TeamProfilePage = ({ match }) => {
  const [teamProfileData, setTeamProfileData] = useState(null);

  useEffect(() => {
    const fetchTeamProfileData = async () => {
      try {
        // Use optional chaining to avoid errors if match or match.params is undefined
        // const abbreviation = match?.params?.abbreviation;
        // if (abbreviation) {
          const response = await fetch(`http://localhost:3001/api/team-profile`);
          const data = await response.json();
          console.log(data)
          setTeamProfileData(data);
        }
        catch{
         console.error();
        }
      
      }

    fetchTeamProfileData();
  }, [match]);

  if (!teamProfileData) {
    return <div>Loading...</div>;
  }

  const { generated_at, team } = teamProfileData;

  return (
    <div className="team-profile-page">
      <h1 className="profile-heading">Team Profile - {team.name}</h1>
      <table className="profile-table">
        <tbody>
          <tr>
            <th>Generated At</th>
            <td>{generated_at}</td>
          </tr>
          <tr>
            <th>Team Name</th>
            <td>{team.name}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>{team.country}</td>
          </tr>
          {/* Add other details as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default TeamProfilePage;
