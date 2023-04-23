

function StartGameBtn(props:IStartGameBtn){
     const {isGameStarted,setIsGameStarted}=props
     function startGame(){
          setIsGameStarted(prev=>!prev)
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