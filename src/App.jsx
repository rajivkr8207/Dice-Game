
import { useState } from 'react'
import './App.css'
import Startgame from './Components/Startgame'
import GamePlay from './Components/GamePlay'
import Rules from './Components/Rules'
import { FaQuestion } from 'react-icons/fa'

function App() {
  const [playgame, setPlaygame] = useState(false)
  const [rule, setRule] = useState(false)
  
  const handlechange = ()=>{
    console.log(playgame);
    setPlaygame(true)
  }


    const handlerule =()=>{
        setRule(!rule)
    }
  return (
    <>
    {playgame ? <GamePlay/> :
      <Startgame handlechange={handlechange} />}

      <button
            onClick={handlerule} 
            className="absolute lg:top-[10rem] top-[12rem] lg:right-[4rem] right-1  px-2 py-2 bg-white  text-black capitalize font-bold text-center rounded text-lg  mx-auto hover:bg-black hover:text-white border-2 border-black"
          >
             <FaQuestion className="my-auto" />
          </button>

          {rule ?  <Rules handlerule={handlerule} /> : null}
    </>
  )
}

export default App
