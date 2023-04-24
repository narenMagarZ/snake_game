

interface IStartGameBtn{
     gameStatus:TGameStatus
     setGameStatus:React.Dispatch<React.SetStateAction<TGameStatus>>
}
interface IEndGameBtn{
     gameStatus:TGameStatus
     setGameStatus:React.Dispatch<React.SetStateAction<TGameStatus>>
}
interface ISnake{
     snake:React.Ref<HTMLDivElement>
     snakeBlock:any[]
}
interface IBlock{
     x:number
     y:number
}
type TSnakeDir = 'backward'|'forward'|'upward'|'downward'

type TAxis = 'x'|'y'
type TDirection = 'pos'|'neg'

interface ISnakeFood{
     foodCoordinate:[number,number]
}
interface ISnakeBlock{
     x:number
     y:number
}

type TSnake = ISnakeBlock[]
type TCoordinate = [number,number]

interface IPlayground{
     gameStatus:TGameStatus
}
type TGameStatus = 'idle'|'playing'|'paused'|'end'

interface IPauseGameBtn {
     gameStatus:TGameStatus
     setGameStatus:React.Dispatch<React.SetStateAction<TGameStatus>>
}