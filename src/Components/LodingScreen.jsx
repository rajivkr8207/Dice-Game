import React from 'react'
// import { RxCross2 } from "react-icons/rx";


const LodingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <div className=" shadow-lg lg:w-[30rem] w-full h-[20rem] rounded-lg p-6 relative">
         
          <div className="flex flex-col justify-center h-full space-y-4">
            <h1 className="text-3xl font-bold text-white text-center ">Loading....</h1>
            
          </div>
        </div>
      </div>
  )
}

export default LodingScreen