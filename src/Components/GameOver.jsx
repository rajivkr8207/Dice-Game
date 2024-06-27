import React from 'react';
import { RxCross2 } from "react-icons/rx";
import TotalScore from './TotalScore';

const GameOver = ({ handleReset, Totalsc }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
        <button 
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={handleReset}
        >
          <RxCross2 className="text-2xl" />
        </button>
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Game Over</h1>
          <h1 className="text-6xl font-extrabold text-red-600">{Totalsc}</h1>
          <p className="text-lg font-semibold text-gray-600">Your Total Score</p>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
