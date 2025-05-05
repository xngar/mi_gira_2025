// components/Beneficios.tsx
import React from "react";
import Beneficio_info from "./Beneficio_info";
import { ShieldCheck } from "lucide-react";
import { CircleDollarSign } from "lucide-react";

const Beneficios: React.FC = () => {
  return (
    <div className=" bg-white flex p-10 gap-10">
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
        titulo="Beneficios Pro fondos"
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
