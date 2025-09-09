import DestinoPaquetes from "@/components/DestinoPaquetes";

import Image from "next/image";
import React from "react";
import { getAreas } from "../api/Services";
import Link from "next/link";

const Paquetes = async () => {
  const response = await getAreas();
  const areas = response.value.entities;
  console.log(areas, "estas son areas");
  return (
    <div className="">
      {/* banner */}
      <div className="relative w-full h-[200px]">
        <Image src="/default.jpeg" alt="logo" fill className="object-cover" />
      </div>

      {/* titulos */}
      <div className="w-[100%] text-center mt-6 px-12">
        <h1 className="text-3xl font-bold text-purple-800">
          Descubre nuestros Paquetes de Viaje ✈️
        </h1>
        <p className="mt-2 text-gray-700 text-lg">
          Vive experiencias inolvidables con nuestros destinos exclusivos. Ya
          sea que sueñes con playas paradisíacas, aventuras en la montaña o
          escapadas urbanas, tenemos el paquete perfecto para ti. ¡Viaja fácil,
          viaja mejor!
        </p>
      </div>
      {/* paquetes */}

      <div className="flex flex-wrap gap-6 mt-6 justify-center pb-5">
        {areas.map((area: any) => (
          <Link href={`/paquetes/${area.IdArea}`} key={area.IdArea}>
            <DestinoPaquetes areas={area} key={area.IdArea} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Paquetes;
