import React, { useState } from "react";
import dice1 from "../assets/dice_1.png";
import dice2 from "../assets/dice_2.png";
import dice3 from "../assets/dice_3.png";
import dice4 from "../assets/dice_4.png";
import dice5 from "../assets/dice_5.png";
import dice6 from "../assets/dice_6.png";
import { FaQuestion } from "react-icons/fa";
import Rules from "./Rules";
const RoleDice = ({ draw, getrandom, hanldereset }) => {
    
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  return (
    <>
      <div>
        <div>
          <img src={diceImages[draw - 1]} alt={`dice-${draw}`} />
        </div>
        <div className="flex flex-col gap-5 mx-auto ">
          <button
            onClick={getrandom}
            className="px-10 py-2 bg-white  text-black capitalize font-bold text-center rounded text-lg relative inline-block mx-auto hover:bg-black hover:text-white border-2 border-black"
          >
            Play Now
          </button>
          <button
            onClick={hanldereset}
            className="px-10 py-2 bg-black  text-white capitalize font-bold text-center rounded text-lg relative inline-block mx-auto hover:bg-white hover:text-black border-2 border-black"
          >
            Reset
          </button>
          
        </div>
      </div>

      
    </>
  );
};

export default RoleDice;
