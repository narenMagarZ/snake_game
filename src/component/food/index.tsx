

function SnakeFood(props:ISnakeFood){
     const [x,y]=props.foodCoordinate
     return(
          <div 
          style={{
               transform:`translate(${x}px,${y}px)`
          }}
          className="snake-food-wrapper">
               <div className="snake-food"></div>
          </div>
     )
}

export default SnakeFood