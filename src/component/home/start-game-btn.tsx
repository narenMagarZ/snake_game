

function StartGameBtn(props:IStartGameBtn){
     const {
          setGameStatus
     }=props
     function startGame(){
          setGameStatus('playing')
     }
     return(
          <button 
          onClick={startGame}
          className="border-0 rounded px-2 py-1">
               Play
          </button>
     )
}

export default StartGameBtn