


function GamePoint(props:IGamePoint){
     return(
          <div>
               <p className="game-point m-0 fw-bold">
                    <span>
                         Point: {props.gamePoint}
                    </span>
               </p>
          </div>
     )
}

export default GamePoint