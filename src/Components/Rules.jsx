import React from "react";
import { RxCross2 } from "react-icons/rx";
const Rules = ({handlerule}) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-screen grid place-content-center bg[#24232369] backdrop-blur-lg">
        <div className="bg-[#e0dddd] lg:w-[50rem] w-full  h-[20rem] rounded-lg p-2 relative">
          <div className="absolute top-5 right-3" onClick={handlerule}>
            <RxCross2 className="text-4xl" />
          </div>
          <div className="flex justify-center my-auto  w-full h-full flex-col lg:gap-2 gap-5">
            <h1 className="text-2xl font-bold ">How to play Dice Game?</h1>
            <ul>
                
                <li className="text-md font-semibold ">1. select any number</li>
            <li className="text-md font-semibold ">2. click on play button</li>
            <li className="text-md font-semibold ">
             3. after click on play button if selected number is equal to dice
              number you will get same point as dice if you get wrong guess then
              2 point will be dedcuted{" "}
            </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rules;
