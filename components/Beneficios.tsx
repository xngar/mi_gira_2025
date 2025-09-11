// components/Beneficios.tsx
import React from "react";
import Beneficio_info from "./Beneficio_info";
import { ShieldCheck } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import { MousePointerClick } from "lucide-react";
import { ThumbsUp } from "lucide-react";

const Beneficios: React.FC = () => {
  return (
    // <div className=" bg-white  p-10 md:pl-30 md:pr-30 gap-10 md:flex-col lg:flex-row sm:flex-col flex-row lg:flex  "></div>
    <div className=" bg-white  grid grid-col-1 lg:grid-cols-4 md:grid-cols-2 gap-10 p-25  ">
      <Beneficio_info
        icono={<ThumbsUp size={100} color="#58167D" aria-label="garantia" />}
        titulo="Garantía"
        descripcion="Contamos con sello de calidad turística y somos parte de la Asociación Chilena de Turismo!."
      />
      <Beneficio_info
        icono={
          <CircleDollarSign
            size={100}
            color="#58167D"
            aria-label="beneficios"
          />
        }
        titulo="Beneficios"
        descripcion="Apoyamos a cada curso a reunir fondos."
      />
      <Beneficio_info
        icono={
          <MousePointerClick size={100} color="#58167D" aria-label="pagos" />
        }
        titulo="Portal de Pagos"
        descripcion="Pagas tu viaje a través de tu banco o tarjetas de crédito mediante webpay.cl"
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
