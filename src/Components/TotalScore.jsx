import React from 'react'

const TotalScore = ({Totalsc}) => {
  return (
    <>
        <div className='grid place-content-center  w-[12rem]' >
            <h1 className='text-8xl font-bold text-center'>{Totalsc}</h1>
            <p className='font-bold text-lg text-center'>Total Score</p>
        </div>
    </>
  )
}

export default TotalScore