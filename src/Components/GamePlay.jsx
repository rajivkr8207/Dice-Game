import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import GameOver from "./GameOver";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GamePlay = () => {
  const [draw, setDraw] = useState(1);
  const [selected, setSelected] = useState(null);
  const [Totalsc, setTotalsc] = useState(0);
  //   const [Chance, setChance] = useState(5);
  //   const [gameOver, setGameOver] = useState(false);

  const handleClick = (number) => {
    setSelected(number);
  };

  const buttonStyle = (number) => ({
    background: selected === number ? "black" : "white",
    color: selected === number ? "white" : "black",
  });

  function getRandomArbitrary(min, max) {
    const randomNo = Math.floor(Math.random() * (max - min) + min);
    setDraw(randomNo);

    if (!selected) {
      toast.error("please select No!", {
        position: "top-center",
        autoClose: 3000,
      });
      setDraw(1);
    } else if (selected === randomNo) {
      setTotalsc(Totalsc + randomNo);
      setSelected(null);
    } else {
      setTotalsc(Totalsc - 2);
      setSelected(null);
    }

    // setChance(prevChance => {
    //   if (prevChance === 1) {
    //     setGameOver(true);
    //     return 5; // Reset chances after game over
    //   }
    //   return prevChance - 1;
    // });
  }

  const getrandom = () => {
    getRandomArbitrary(1, 7);
  };

  const handleReset = () => {
    setDraw(1);
    setTotalsc(0);
    setSelected(null);
    // setChance(5);
    // setGameOver(false);
  };

  return (
    <>
      <div className="w-full h-screen container mx-auto ">
        <div className="flex justify-between lg:flex-row flex-col items-center">
          <TotalScore Totalsc={Totalsc} />
          <NumberSelector handleClick={handleClick} buttonStyle={buttonStyle} />
        </div>
        <div className=" grid place-content-center h-[30rem]">
          <RoleDice
            getrandom={getrandom}
            draw={draw}
            hanldereset={handleReset}
          />
        </div>
        {/* <div className="absolute top-3 lg:left-[46%] left-[68%] px-2 py-1 bg-white shadow-lg text-lg font-semibold border border-black">
          Chance: {Chance}
        </div> */}
      </div>

      {/* {gameOver ? <GameOver setGameOver={setGameOver} handleReset={handleReset} /> : null} */}

      <ToastContainer />
    </>
  );
};

export default GamePlay;
