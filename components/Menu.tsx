import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <div className="w-full h-[100px] bg-[#58167D] flex justify-between p-8 pt-5 items-center">
      <div className="w-[200px]">
        <Image src="/gira.png" width={70} height={70} alt="logo" />
      </div>
      <div className="flex justify-around gap-[100px]">
        <div className=" w-[600px] ">
          <ul className="flex gap-3.5 justify-around">
            <li className="animacion-botones">Home</li>
            <li className="animacion-botones">Paquetes</li>
            <li className="animacion-botones">Lujos</li>
            <li className="animacion-botones">Cruceros</li>
            <li className="animacion-botones">Contacto</li>
          </ul>
        </div>
        <div>
          <p>Viernes, 02 de Mayo del 2025 / contado: 950 - crédito: 960</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
