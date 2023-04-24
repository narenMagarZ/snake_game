import { useEffect, useRef, useState } from "react"
import SnakeFood from "../food"
import Snake from "../snake"


function PlayGround(props:IPlayground){
     const{gameStatus}=props
     const initialSnake = [
          {
               x:0,
               y:0
          },
          {
               x:20,
               y:0
          },
          {
               x:40,
               y:0
          },
          {
               x:60,
               y:0
          },   
          {
               x:80,
               y:0
          }
     ]
     const [snakeBlock,setSnakeBlock]=useState<TSnake>([])
     const [snakeDir,setSnakeDir]=useState<TSnakeDir>('forward')
     const [gamePoint,setGamePoint]=useState(0)
     const intervalDelayRef = useRef(500)
     function setSnakeBlockCoordinate(axis:TAxis,direction:TDirection){
          snakeBlock.forEach((block,i)=>{
               if(i===snakeBlock.length-1){
                    const prevValue = block[axis]
                    block[axis] = direction==='pos'?prevValue+20:prevValue-20
               }else{
                    block.x = snakeBlock[i+1].x
                    block.y = snakeBlock[i+1].y 
               }
          })
          setSnakeBlock([...snakeBlock])
     }
     function moveSnake(ev:KeyboardEvent){
          if(gameStatus!=='playing')
          return
          const keyDown = ev.key.toLocaleLowerCase()
          switch(keyDown){
               case "w":
                    if(snakeDir==='downward')return
                    if(snakeDir==='upward')return
                    setSnakeDir('upward')
                    setSnakeBlockCoordinate('y','neg')
                    break
               case "a":
                    if(snakeDir==='forward') return
                    if(snakeDir==='backward')return
                    setSnakeDir('backward')
                    setSnakeBlockCoordinate('x','neg')
                    break
               case "s":
                    if(snakeDir==='upward')return
                    if(snakeDir==='downward')return
                    setSnakeDir('downward')
                    setSnakeBlockCoordinate('y','pos')
                    break
               case "d":
                    if(snakeDir==='backward')return
                    if(snakeDir==='forward') return
                    setSnakeDir('forward')
                    setSnakeBlockCoordinate('x','pos')
                    break
               default:
                    break
          }
          if(checkIfFoodIsEaten(snakeBlock[snakeBlock.length-1])){
               setGamePoint(prev=>prev+5)
               setIsFoodEaten(true)
               growSnakeOnFoodEaten()
          }
     }
     useEffect(()=>{
          if(gameStatus==='idle'){
               setSnakeDir('forward')
               setGamePoint(0)
               intervalDelayRef.current = 500
               setSnakeBlock([...initialSnake])
          }
     },[gameStatus])
     const snakeRef = useRef<HTMLDivElement>(null)
     useEffect(()=>{
          document.body.addEventListener('keydown',moveSnake)
          return()=>{
               document.body.removeEventListener('keydown',moveSnake)
          }
     })
     const[foodCoordinate,setFoodCoordinate]=useState<TCoordinate>([0,0])
     const[isFoodEaten,setIsFoodEaten]=useState(false)

     function getRandomCoordinate():TCoordinate|undefined{
          setIsFoodEaten(false)
          const hX = playgroundRef.current?.clientWidth || 500
          const hY = playgroundRef.current?.clientHeight || 500
          const diffBy = 50
          const x = Math.floor(Math.random()*(hX-diffBy))
          const y = Math.floor(Math.random()*(hY-diffBy))
          const newCoord = convertCoordinateToSuit([x,y])
          if(isFoodOnSnake(snakeBlock,newCoord)) getRandomCoordinate()
          else return newCoord
     }
     function convertCoordinateToSuit(coordinate:TCoordinate):TCoordinate{
          const [x,y]=coordinate
          const newCoordinate:[number,number] = [x,y]
          if(x%20!==0){
               const t = x%20
               newCoordinate[0]=x-t
          }
          if(y%20!==0){
               const t = y%20
               newCoordinate[1]=y-t
          }
          return newCoordinate
     }
     useEffect(()=>{
          if(isFoodEaten){
               const foodCoordinate = getRandomCoordinate()||[0,0]
               setFoodCoordinate(foodCoordinate)
          }
     },[isFoodEaten])
     useEffect(()=>{
          const foodCoordinate = getRandomCoordinate()||[0,0]
          setFoodCoordinate(foodCoordinate)
     },[])
     useEffect(()=>{
          if(intervalDelayRef.current >100)
          intervalDelayRef.current -=60

     },[gamePoint])
     const playgroundRef = useRef<HTMLDivElement>(null)

     function checkIfFoodIsEaten(snakeHeadCoordinate:{x:number,y:number}){
          const{x:headX,y:headY}=snakeHeadCoordinate
          const[fX,fY]=foodCoordinate
          return headX===fX&&headY===fY
     }
     function growSnakeOnFoodEaten(){
          const newSnakeBlock = {
               x:snakeBlock[0].x,
               y:snakeBlock[0].y
          }
          setSnakeBlock((prev)=>{
               const newSnake = [newSnakeBlock,...prev]
               return newSnake
          })
     }
     function isFoodOnSnake(snake:TSnake,foodCoordinate:TCoordinate):boolean{
          const[fX,Fy]=foodCoordinate
          return snake.some(({x,y})=>(x===fX&&y===Fy))
     }
     function snakeAnimation(){
          if(snakeDir==='forward'){
               setSnakeBlockCoordinate('x','pos')
          }
          else if(snakeDir==='downward'){
               setSnakeBlockCoordinate('y','pos')
          }
          else if(snakeDir==='upward'){
               setSnakeBlockCoordinate('y','neg')
          }
          else if(snakeDir==='backward'){
               setSnakeBlockCoordinate('x','neg')
          }
          if(checkIfFoodIsEaten(snakeBlock[snakeBlock.length-1])){
               setIsFoodEaten(true)
               setGamePoint(prev=>prev+5)
               growSnakeOnFoodEaten()
          }
     }
     const snakeAnimationIntervalRef = useRef<any>(null)
     useEffect(()=>{
          // start the snake animation only if the game is started
          if(gameStatus==='playing'){
               snakeAnimationIntervalRef.current = setInterval(()=>{
                    const isBite = checkIfSnakeBiteItself(snakeBlock)
                    console.log(isBite,'bite')
                    // if isBite true, then end the game 
                    // here, the game looks laggy
                    // needs to figure out
                    snakeAnimation()
               },intervalDelayRef.current)
          }
          else if(gameStatus==='paused'){
               clearInterval(snakeAnimationIntervalRef.current)
          }
          return()=>{
               clearInterval(snakeAnimationIntervalRef.current)
          }
     })
     // useEffect(()=>{
     //      if(gameStatus==='idle'){
     //           setSnakeBlock([...initialSnake])
     //      }
     // },[gameStatus])
     function checkIfSnakeBiteItself(snake:TSnake){
          const {x:headX,y:headY} = snake[snake.length-1]
          const snakeClone = [...snake]
          snakeClone.pop()
          const isBite = snakeClone.some(({x,y})=>{
               if(x===headX && y===headY)
               return true
          })
          return isBite
     }
     return(
          <div
          ref={playgroundRef}
          className="border p-0 border-primary border border-primary playground"
          >
               <SnakeFood
               foodCoordinate={foodCoordinate}
               />
               <Snake
               snake={snakeRef}
               snakeBlock={snakeBlock}
               />
          </div>
     )
}

export default PlayGround