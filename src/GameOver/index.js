import './index.css'

const GameOver = props => {
  const {score, playGameAgain} = props

  const playGame = () => {
    playGameAgain()
  }

  return (
    <div className="background-scoreCard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <p>YOUR SCORE</p>
      <h1>{score}</h1>
      <button type="button" onClick={playGame} className="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
          alt="reset"
        />
        <p>PLAY AGAIN</p>
      </button>
    </div>
  )
}
export default GameOver
