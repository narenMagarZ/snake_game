

function EndGameBtn(props:IEndGameBtn){
     const {
          setGameStatus
     }=props
     function endGame(){
          setGameStatus('end')
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