import { useRef, useState } from "react"
import Block from "./block"


function Snake(props:ISnake){
     const {snake,snakeBlock}=props
     console.log(snake)
     return(
          <div
          className="snake"
          ref={snake}
          style={{
          }}
          >
               {
                   snakeBlock.map((block,i)=>(
                    <Block
                    key={i}
                    {...block}
                    />
                   ))
               }
          </div>
     )
}

export default Snake