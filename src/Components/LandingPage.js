import { useSelector, useDispatch } from 'react-redux';
import { updateCurrentPlayer } from '../actions';
import '../Styles/LandingPage.css';

const LandingPage = ({ startGame }) => {
  const leaderBoard = useSelector(state => state.leaderBoard)
  const currentPlayer = useSelector(state => state.currentPlayer)
  const dispatch = useDispatch()

  const handleChange = ({ value }) => {
    dispatch(updateCurrentPlayer(value))
  }

  const topLeaders = leaderBoard.map((leader) => {
    return (
      <tr key={leader.id}>
        <td>{leader.player_name}</td>
        <td>{leader.score}</td>
      </tr>
    )
  })

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
            {topLeaders}
          </table>
        </div>
      </div>
      <div className="name-form">
        <form>
          <label for="player_name">Player Name:</label><br></br>
          <input type="text" id="player_name" name="player_name"  onChange={(e) => handleChange(e.target)} value={currentPlayer} placeholder="Enter name to start"></input><br></br>
          <button className="start-game-button" value="Start" onClick={startGame}>START!</button><br></br>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
