

function EndGameBtn(props:IStartGameBtn){
     const {isGameStarted,setIsGameStarted}=props
     function endGame(){
          setIsGameStarted(false)
     }
     return(
          <button
          onClick={endGame}
          className="border-0 rounded px-2 py-1"
          >
               End
          </button>
     )
}

export default EndGameBtn