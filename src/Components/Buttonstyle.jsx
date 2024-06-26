import React from "react";

const Buttonstyle = (props) => {
  return (
    <>
      <button className=" px-10 py-2 bg-black capitalize text-white font-bold text-center rounded text-lg relative inline-block mr-0 ml-auto hover:bg-white hover:text-black border-2 border-black">
        {props.name}
      </button>
    </>
  );
};

export default Buttonstyle;
