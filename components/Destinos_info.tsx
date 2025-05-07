"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Destinos_info = () => {
  return (
    <div className="w-full bg-[#58167D] rounded-2xl">
      {/* Se crea un contenedor con la clase relative para que el contenido
          interno se posicione relativo al contenedor */}
      <motion.div
        whileHover={{ scale: 1.02, filter: "saturate(1.5)" }} // Aumenta la saturación a 150% al hacer hover
        className="relative w-full h-[400px] cursor-pointer rounded-2xl" // Añadí cursor-pointer
      >
        {/* Se utiliza el componente Image de next/image para mostrar una imagen
            con el atributo src se indica la ruta de la imagen
            con el atributo layout se indica que el tama o de la imagen sera
            el mismo que el contenedor padre (en este caso el div con clase relative)
            con el atributo objectFit se indica que la imagen se ajuste al tama o
            del contenedor sin estar estirada */}
        <Image
          src="/chile.jpg"
          layout="fill"
          objectFit="cover"
          alt="chile"
          className="rounded-4xl p-4"
        />
      </motion.div>
      <div className="flex flex-col justify-center items-center p-6">
        <button className="bg-yellow-400 p-3 w-[100%] rounded-2xl">
          Ver mas
        </button>
      </div>
    </div>
  );
};

export default Destinos_info;
