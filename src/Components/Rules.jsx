import React from "react";
import { RxCross2 } from "react-icons/rx";

const Rules = ({ handlerule }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white shadow-lg lg:w-[50rem] w-full h-[20rem] rounded-lg p-6 relative">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={handlerule}
          >
            <RxCross2 className="text-3xl" />
          </button>
          <div className="flex flex-col justify-center h-full space-y-4">
            <h1 className="text-3xl font-bold text-gray-800 text-center">How to play Dice Game?</h1>
            <ul className="space-y-2 text-gray-700">
              <li className="text-md font-medium">1. Select any number</li>
              <li className="text-md font-medium">2. Click on play button</li>
              <li className="text-md font-medium">
                3. After clicking on the play button, if the selected number matches the dice number, you will get the same points as the dice. If your guess is wrong, 2 points will be deducted.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rules;
