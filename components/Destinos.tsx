import React from "react";
import Destinos_info from "./Destinos_info";

const Destinos = () => {
  return (
    <div className=" bg-white ">
      <h2 className="text-[50px] text-[#58167D] flex justify-center items-center">
        ¿Dónde quieres ir con tu curso?
      </h2>
      <div className="grid grid-cols-3 gap-20 pl-28 pr-28 pt-[50px] ">
        <Destinos_info />
        <Destinos_info />
        <Destinos_info />
        <Destinos_info />
        <Destinos_info />
        <Destinos_info />
      </div>
    </div>
  );
};

export default Destinos;
