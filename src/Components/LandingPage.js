import '../Styles/LandingPage.css';

const LandingPage = ({ startGame }) => {
  return (
    <div className="landing-page">
      <h1 className="title">Welcome to Escape the House!</h1>
      <p className="summary">Looking for a way to break up the motonony of your day? Not quite prepared to walk away from your laptop? Have a meeting in 5 minutes and need something to occupy your hands and thoughts until you're released from the waiting room? Look no further; our simple puzzle will hit the spot. Simply enter your name below and jump in.</p>
      <div className="leaderboard-container">
        <h1 className="title-2">Leaderboard</h1>
        <div className="table-container">
          <table className="leaderboard-table">
            <tr>
              <th className="leaderboard-header">Player Name</th>
              <th className="leaderboard-header">Score</th>
            </tr>
            <tr>
              <td className="leaderboard-data">data.games[0].player_name</td>
              <td className="leaderboard-data">data.games[0].score</td>
            </tr>
            <tr>
              <td className="leaderboard-data">data.games[1].player_name</td>
              <td className="leaderboard-data">data.games[1].score</td>
            </tr>
            <tr>
              <td className="leaderboard-data">data.games[2].player_name</td>
              <td className="leaderboard-data">data.games[2].score</td>
            </tr>
            <tr>
              <td className="leaderboard-data">data.games[3].player_name</td>
              <td className="leaderboard-data">data.games[3].score</td>
            </tr>
            <tr>
              <td className="leaderboard-data">data.games[4].player_name</td>
              <td className="leaderboard-data">data.games[4].score</td>
            </tr>
            <tr>
              <td className="leaderboard-data">data.games[5].player_name</td>
              <td className="leaderboard-data">data.games[5].score</td>
            </tr>
            <tr>
              <td className="leaderboard-data">data.games[6].player_name</td>
              <td className="leaderboard-data">data.games[6].score</td>
            </tr>
            <tr>
              <td className="leaderboard-data">data.games[7].player_name</td>
              <td className="leaderboard-data">data.games[7].score</td>
            </tr>
            <tr>
              <td className="leaderboard-data">data.games[8].player_name</td>
              <td className="leaderboard-data">data.games[8].score</td>
            </tr>
            <tr>
              <td className="leaderboard-data">data.games[9].player_name</td>
              <td className="leaderboard-data">data.games[9].score</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="name-form">
        <form>
          <label for="player_name">Player Name:</label><br></br>
          <input type="text" id="player_name" id="playerName" name="player_name" placeholder="Enter name to start"></input><br></br>
          <button className="start-game-button" value="Start" onClick={startGame}>START!</button><br></br>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
