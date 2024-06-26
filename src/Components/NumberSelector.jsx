import React, { useState } from 'react';

const NumberSelector = ({buttonStyle, handleClick}) => {
    

    return (
        <div className='flex gap-3'>
            {[1, 2, 3, 4, 5, 6].map(number => (
                <button
                    key={number}
                    onClick={() => handleClick(number)}
                    style={ buttonStyle(number)}
                    className='px-3 py-1 border-2 border-black text-lg font-semibold'
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

export default NumberSelector;
