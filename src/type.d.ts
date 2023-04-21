

interface IStartGameBtn{
     isGameStarted:boolean
     setIsGameStarted:React.Dispatch<React.SetStateAction<boolean>>
}
interface ISnake{
     snake:React.Ref<HTMLDivElement>
}