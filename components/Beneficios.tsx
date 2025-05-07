// components/Beneficios.tsx
import React from "react";
import Beneficio_info from "./Beneficio_info";
import { ShieldCheck } from "lucide-react";
import { CircleDollarSign } from "lucide-react";

const Beneficios: React.FC = () => {
  return (
    <div className=" bg-white  p-10 gap-10 md:flex-col lg:flex-row sm:flex-col flex-row lg:flex  ">
      <Beneficio_info
        icono={
          <ShieldCheck size={100} color="#58167D" aria-label="seguridad" />
        }
        titulo="Seguridad"
        descripcion="Asistencia en Viaje: Para que viajes con la tranquilidad que necesitas."
      />
      <Beneficio_info
        icono={
          <CircleDollarSign size={100} color="#58167D" aria-label="seguridad" />
        }
        titulo="Beneficios"
        descripcion="Apoyamos a cada curso a reunir fondos."
      />
      <Beneficio_info
        icono={
          <ShieldCheck size={100} color="#58167D" aria-label="seguridad" />
        }
        titulo="Seguridad"
        descripcion="Asistencia en Viaje: Para que viajes con la tranquilidad que necesitas."
      />
      <Beneficio_info
        icono={
          <ShieldCheck size={100} color="#58167D" aria-label="seguridad" />
        }
        titulo="Seguridad"
        descripcion="Asistencia en Viaje: Para que viajes con la tranquilidad que necesitas."
      />
    </div>
  );
};

export default Beneficios;
