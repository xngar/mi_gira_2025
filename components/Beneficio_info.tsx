// components/Beneficio_info.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

interface BeneficioInfoProps {
  icono: React.ReactNode;
  titulo: string;
  descripcion: string;
}

const Beneficio_info: React.FC<BeneficioInfoProps> = ({
  icono,
  titulo,
  descripcion,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <motion.div whileHover={{ scale: 1.2, marginTop: -20 }}>
        {icono}
      </motion.div>{" "}
      {/* Renderiza el icono aquí */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[30px] text-[#58167D] text-center">{titulo}</h2>
        <h3 className="text-[18px] text-gray-600 ">{descripcion}</h3>
      </div>
    </div>
  );
};

export default Beneficio_info;
