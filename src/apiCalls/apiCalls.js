export const getLeaderBoard = () => {
  return fetch('https://pewpewpew-be.herokuapp.com/api/v1/leaderboard')
  .then(response => response.json())
  .then(data => data.games)
  .catch(err => console.log(err))
 }
  
 export const submitGame = (gameInfo) => {
  
  // let game = {gameInfo}
  return fetch("https://pewpewpew-be.herokuapp.com/api/v1/games", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(gameInfo),
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
 }