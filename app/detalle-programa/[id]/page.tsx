"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { Hotel, Star, Check } from "lucide-react";
import { ProgramaDetalle } from "@/types/types";

const Detalle_Programa = ({ params }: any) => {
  console.log(params.id, "el id del programa");
  const [programas, setProgramas] = useState<ProgramaDetalle>();

  async function llamarProgramasDetalles() {
    const response = await fetch(
      `https://services.migira.cl/api/Migira/Programa/${params.id}`,
      { method: "GET" }
    );
    const destacados = await response.json();
    console.log(destacados, "los destacados");

    setProgramas(destacados.value.entity);
  }

  useEffect(() => {
    llamarProgramasDetalles();
  }, []);

  return (
    <div>
      {/* Informacion del destino */}

      {/* Portada del programa| */}
      <div className="w-[80%] h-[300px] relative justify-center mx-auto">
        <Image
          src={programas?.UrlImage || "/chile.jpg"}
          alt="Imagen del programa"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-4xl mt-2"
        />
      </div>

      <div className="flex w-[80%] mx-auto">
        {/* Información del programa destino */}
        <div className="justify-start mx-auto w-[80%]  flex flex-col   mt-4">
          <span className="font-bold text-[24px]">{programas?.Titulo}</span>
          <div className="text-3xl flex align-middle items-center">
            <Hotel className="bg-[#58167D] p-1 text-white rounded-md mr-2" />{" "}
            <span>
              {programas?.Subtitulo === null
                ? "Sin información disponible"
                : programas?.Subtitulo}
            </span>
          </div>
          <div className="mt-2 w-[95%]">
            <h2 className="font-bold">Información del Destino</h2>
            <p className="text-sm">
              Cayo Santa María es una pequeña isla frente a la costa norte de
              Cuba. Es conocida por sus playas y los deportes acuáticos. La
              playa Gaviotas, en el noreste, está rodeada de la frondosa
              vegetación del Refugio de Fauna de Cayo Santa María, que alberga
              una gran cantidad de aves. El central complejo Pueblo La Estrella
              tiene un mercado de artesanía, restaurantes y bares. Hay
              espectáculos de delfines y lobos de mar en el Acuario Delfinario
              Cayo Santa María.
            </p>
          </div>
        </div>
        {/* Valores del programa */}

        <div className="bg-gray-200 w-[80%] h-[200px] justify-center mx-auto flex flex-col mt-4 rounded-sm p-3 relative">
          <div className="bg-amber-300 p-2 absolute -top-5 right-0 rounded-md text-sm flex">
            <Star className="mr-2" /> {programas?.Texto}
          </div>
          <span className="font-bold text-lg text-[#58167D]">
            {programas?.Dias} días / {programas?.Noches} noches
          </span>
          <span>Precio desde:</span>
          <span className="text-3xl font-bold  text-[#58167D]">
            ${programas?.Precio}
          </span>
          <span>Incluye impuestos, tasas y cargos</span>
        </div>
      </div>

      {/* detalles del programa incluye */}
      <div className="w-[80%] mx-auto mt-4 justify-center border-2 border-black/10 rounded-md p-4">
        <h2 className="bg-[#58167D] p-2 rounded-md text-white">
          El programa Incluye
        </h2>
        <ul className="list-none mt-2">
          {programas?.Incluyes.map((incluye, index) => (
            <li key={index}>
              <div className="flex items-center mt-0.5">
                <Check className="mr-2 text-amber-500 w-4" />
                {incluye.Texto}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Itinerario del programa */}
      {programas?.Itinerarios ? (
        <div className="w-[80%] mx-auto mt-4 justify-center border-2 border-black/10 rounded-md p-4 mb-4">
          <h2 className="bg-[#58167D] p-2 rounded-md text-white">Itinerario</h2>
          {programas?.Itinerarios.map((itinerario) => (
            <div key={itinerario.Dia} className="mb-4">
              <h3 className="font-bold text-lg">Día {itinerario.Dia}</h3>
              <p>{itinerario.Cuerpo}</p>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Detalle_Programa;
