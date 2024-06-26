
import { useState } from 'react'
import './App.css'
import Startgame from './Components/Startgame'
import GamePlay from './Components/GamePlay'

function App() {
  const [playgame, setPlaygame] = useState(false)
  
  const handlechange = ()=>{
    console.log(playgame);
    setPlaygame(true)
  }
  return (
    <>
    {playgame ? <GamePlay/> :
      <Startgame handlechange={handlechange} />}
    </>
  )
}

export default App
