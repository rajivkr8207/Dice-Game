import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import GameOver from "./GameOver";
import LoadingScreen from "./LodingScreen";

const GamePlay = () => {
  const [draw, setDraw] = useState(1);
  const [selected, setSelected] = useState(null);
  const [Totalsc, setTotalsc] = useState(0);
  const [Chance, setChance] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = (number) => {
    setSelected(number);
  };

  const buttonStyle = (number) => ({
    background: selected === number ? "black" : "white",
    color: selected === number ? "white" : "black",
  });

  function getRandomArbitrary(min, max) {
    const randomNo = Math.floor(Math.random() * (max - min) + min);

    if (Chance == 0 && selected) {
      toast.error("Game Over!", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      if (!selected) {
        toast.error("please select No!", {
          position: "top-center",
          autoClose: 3000,
        });
      } else {
        setLoading(true);

        setTimeout(() => {
          setLoading(false);
          setDraw(randomNo);
          if (selected === randomNo) {
            setTotalsc(Totalsc + randomNo);
            setSelected(null);
            updateChance(Chance - 1);
          } else {
            setTotalsc(Totalsc - 2);
            setSelected(null);
            updateChance(Chance - 1);
          }
        }, 500);
      }
    }
  }
  const getrandom = () => {
    getRandomArbitrary(1, 7);
  };

  const updateChance = (newChance) => {
    setChance(newChance);
    if (newChance === 0) {
      setTimeout(() => {
        setLoading(true);
      }, 500);
      setTimeout(() => {
        setLoading(false);
        setGameOver(true);
      }, 2000);
    }
  };

  const handleReset = () => {
    setDraw(1);
    setTotalsc(0);
    setGameOver(false);
    setSelected(null);
    setChance(5);
  };

  const Gameover = () => {
    setGameOver(false);
  };

  return (
    <>
      {loading ? <LoadingScreen /> : null}
      <div className="w-full h-screen container mx-auto ">
        <div className="flex justify-between lg:flex-row flex-col items-center">
          <TotalScore Totalsc={Totalsc} />
          <NumberSelector handleClick={handleClick} buttonStyle={buttonStyle} />
        </div>
        <div className="grid place-content-center h-[30rem]">
          <RoleDice
            getrandom={getrandom}
            draw={draw}
            hanldereset={handleReset}
          />
        </div>
        <div className="absolute top-3 lg:left-[46%] left-[68%] gap-5">
          <div className=" px-2 py-1 bg-white shadow-lg text-lg font-semibold border border-black">
            {/* {Chance == 0 ? "GameOver" : "Chance"}:{" "}
            {Chance == 0 ? `${gameOvercounter}` : `${Chance}`} */}
            Chance : {Chance}
          </div>

          {/* <div className=" px-2 py-1 bg-white shadow-lg text-lg font-semibold border border-black">
          GameOver: {gameOvercounter}
        </div> */}
        </div>
      </div>

      {gameOver ? (
        <GameOver Totalsc={Totalsc} handleReset={handleReset} />
      ) : null}

      <ToastContainer />
    </>
  );
};

export default GamePlay;
