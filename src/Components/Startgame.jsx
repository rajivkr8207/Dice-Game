import React, { useState } from "react";
import dice from "../assets/dices1.png";
import Buttonstyle from "./Buttonstyle";
import { FaQuestion } from "react-icons/fa";
import Rules from "./Rules";
const Startgame = (props) => {
    // const [rule, setRule] = useState(false)

    // const handlerule =()=>{
    //     setRule(!rule)
    // }
  return (
    <>
      <div className="container w-full h-screen flex justify-center items-center ">
        <div className="flex justify-around lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full">
            <img src={dice} alt="" srcset="" cla />
          </div>
          <div className="lg:w-1/2 w-full  grid lg:justify-end justify-center place-content-center">
            <h1 className="lg:text-8xl text-6xl font-semibold">Dice Game</h1>
            <div className=" flex justify-end flex-col gap-5">
            <button
              onClick={props.handlechange}
              className=" px-10 py-2 bg-black capitalize text-white font-bold text-center rounded text-lg relative inline-block lg:mr-0  lg:ml-auto lg:mx-0 mx-auto hover:bg-white hover:text-black border-2 border-black"
            >
              play now
            </button>
            
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Startgame;
