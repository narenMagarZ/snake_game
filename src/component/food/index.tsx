

function SnakeFood(props:ISnakeFood){
     const [x,y]=props.foodCoordinate
     return(
          <div 
          style={{
               transform:`translate(${x}px,${y}px)`
          }}
          className="snake-food">
          </div>
     )
}

export default SnakeFood