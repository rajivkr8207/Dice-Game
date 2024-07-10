import React, { useState } from 'react'

const YourName = (props) => {
    const [yourname, setYourname] = useState('')
  return (
    <>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white shadow-lg lg:w-[30rem] w-full h-[20rem] rounded-lg p-6 relative">
         
          <div className="flex flex-col justify-center h-full space-y-4">
            <h1 className="text-3xl font-bold text-black text-center ">Enter your name</h1>
            <input type="text" name="yourname" id="" className='border' />
            <button
              onClick={props.handlechange}
              className=" px-10 py-2 bg-black capitalize text-white font-bold text-center rounded text-lg relative inline-block lg:mr-0  lg:ml-auto lg:mx-0 mx-auto hover:bg-white hover:text-black border-2 border-black"
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default YourName