import StartGameBtn from "../home/start-game-btn"


function GameOver(){
     return(
          <div className="game-over-container">
               <div>
                    <p><h5 className="fw-bold text-white">Game over</h5></p>
                    <div>
                         {/* <StartGameBtn/> */}
                    </div>
               </div>
          </div>    
     )
}

export default GameOver