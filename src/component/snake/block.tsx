

function Block(props:IBlock){
     return(
          <div 
          style={{
               transform:`translate(${props.x}px,${props.y}px)`
          }}
          id="snake"
          className="snake-block"
          >
          </div>
     )
}

export default Block