"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { Hotel } from "lucide-react";
import { MapPin } from "lucide-react";
import Link from "next/link";

// interface Props {
//   hotel?: string;
//   destino?: string;
//   precio?: string;
//   dia?: string;
//   noches?: string;
// }

const Destinos_info = () => {
  return (
    <div className="w-full bg-whites rounded-2xl shadow-2xl">
      {/* Se crea un contenedor con la clase relative para que el contenido
          interno se posicione relativo al contenedor */}
      <motion.div
        whileHover={{ scale: 1.02, filter: "saturate(1.5)" }} // Aumenta la saturación a 150% al hacer hover
        className="relative w-full h-[400px] cursor-pointer " // Añadí cursor-pointer
        style={{ height: "250px" }}
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
          className="rounded-3xl p-1  "
        />
      </motion.div>
      <div className="flex flex-col   p-6 bg-white rounded-b-2xl">
        <h4 className="text-sm">
          <div className="flex pb-3">
            <MapPin className="" /> <span className="pl-2">CANCÚN MEXICO</span>
          </div>
        </h4>
        <h3 className="text-xl font-bold text-[#58167D]">
          <div className="flex">
            <Hotel /> <span className="pl-2">The Pyramid Cancún</span>
          </div>
        </h3>

        <h5 className="pt-6 text-sm">Desde</h5>
        <h4 className="text-xl pb-2 font-bold text-[#58167D]">USD $1.500</h4>
        <div className="pb-2">
          <div className="flex">
            <Sun />
            <span className="pl-2">8 días</span> / <Moon />
            <span className="pl-2">7 noches</span>
          </div>
        </div>
        <p className="pb-4">Valor por 2 personas</p>
        <button className="bg-yellow-400 p-3 w-[50 %] sm:w-[40%] rounded-full self-end hover:bg-amber-600 transition-all duration-150 cursor-pointer flex justify-center">
          <Link href="/detalle-programa" className="font-semibold">
            Ver detalles
          </Link>{" "}
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Destinos_info;
