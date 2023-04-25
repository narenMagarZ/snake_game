import { useEffect, useState } from "react"
import GamePoint from "../game-point"
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
     const[gamePoint,setGamePoint]=useState(0)
     return(
          <div
          className="d-flex align-items-center justify-content-center home flex-column gap-2" >
               <div className="d-flex align-items-center gap-2">
                    {
                         (gameStatus==='paused'|| gameStatus==='playing')
                         && <GamePoint
                         gamePoint={gamePoint}
                         />
                    }
                    
                    
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
               setGameStatus={setGameStatus}
               gamePoint={gamePoint}
               setGamePoint={setGamePoint}
               />
          </div>
     )
}

export default Home