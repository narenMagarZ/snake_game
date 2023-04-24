import { useEffect, useState } from "react"
import PlayGround from "../playground"
import EndGameBtn from "./end-game-btn"
import PauseAndPlayGameBtn from "./pause-game-btn"
import StartGameBtn from "./start-game-btn"

function Home(){
     const[gameStatus,setGameStatus]=useState<TGameStatus>('idle')
     useEffect(()=>{
          if(gameStatus==='end'){
               setGameStatus('idle')
          }
     },[gameStatus])
     return(
          <div
          className="d-flex align-items-center justify-content-center home flex-column gap-2" >
               <div className="d-flex align-items-center gap-2">
                    {
                         gameStatus==='idle' && <StartGameBtn
                         gameStatus={gameStatus}
                         setGameStatus={setGameStatus}
                         />
                    }
                    {
                         (gameStatus==='paused'||gameStatus==='playing') 
                         && <PauseAndPlayGameBtn
                         gameStatus={gameStatus}
                         setGameStatus={setGameStatus}
                         />
                    }
                    {
                         (gameStatus==='paused'||gameStatus==='playing') 
                         && <EndGameBtn
                         gameStatus={gameStatus}
                         setGameStatus={setGameStatus}
                         />
                    }
                   
               </div>
               <PlayGround
               gameStatus={gameStatus}
               />
          </div>
     )
}

export default Home