

function PauseAndPlayGameBtn(props:IPauseGameBtn){
     const{gameStatus,setGameStatus}=props
     function handlePauseGame(){
          setGameStatus(prev=>{
               return prev==='playing'?'paused':'playing'
          })
     }
     return(
          <button
          onClick={handlePauseGame}
          className="border-0 rounded px-2 py-1"
          >
               {
                    gameStatus==='playing'?'Pause':'Resume'
               }
          </button> 
     )
}

export default PauseAndPlayGameBtn