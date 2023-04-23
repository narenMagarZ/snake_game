import { useState } from "react"
import PlayGround from "../playground"
import EndGameBtn from "./end-game-btn"
import PauseGameBtn from "./pause-game-btn"
import StartGameBtn from "./start-game-btn"



function Home(){
     const [isGameStarted,setIsGameStarted]=useState(false)
     return(
          <div
          className="d-flex align-items-center justify-content-center home flex-column gap-2" >
               <div className="d-flex align-items-center gap-2">
                    {
                         !isGameStarted && <StartGameBtn
                         isGameStarted={isGameStarted}
                         setIsGameStarted={setIsGameStarted}
                         />
                    }
                    {
                         isGameStarted && <PauseGameBtn/>
                    }
                    {
                         isGameStarted && <EndGameBtn
                         isGameStarted={isGameStarted}
                         setIsGameStarted={setIsGameStarted}
                         />
                    }
                   
               </div>
               <PlayGround/>
          </div>
     )
}

export default Home