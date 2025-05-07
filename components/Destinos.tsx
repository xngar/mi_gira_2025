import React from "react";
import Destinos_info from "./Destinos_info";

const Destinos = () => {
  return (
    <div className=" bg-white mb-10 ">
      <h2 className="text-[50px] text-[#58167D] flex justify-center items-center ">
        ¿Dónde quieres ir con tu curso?
      </h2>
      <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 gap-10 pl-15 pr-15 lg:pl-28  lg:pr-28 pt-[50px] ">
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
