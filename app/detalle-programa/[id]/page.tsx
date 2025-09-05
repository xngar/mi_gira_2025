"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { Hotel, Star, Check } from "lucide-react";
import { ProgramaDetalle } from "@/types/types";

const Detalle_Programa = ({ params }: any) => {
  console.log(params.id, "el id del programa");
  const [programas, setProgramas] = useState<ProgramaDetalle>();
  console.log(programas?.Video, "el video del programa");

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
              {programas?.Itinerarios ? (
                <div>
                  {programas?.Itinerarios.map((itinerario) => {
                    if (itinerario.Tipo === "1")
                      return (
                        <div key={itinerario.Dia} className="mb-4">
                          <p>{itinerario.Cuerpo}</p>
                        </div>
                      );
                  })}
                </div>
              ) : (
                ""
              )}
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
      {programas?.Incluyes && programas.Incluyes.length > 0 ? (
        <div className="w-[80%] mx-auto mt-4 justify-between border-2 border-black/10 rounded-md p-4 flex gap-2">
          <div>
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

          <div dangerouslySetInnerHTML={{ __html: programas?.Video || "" }} />
        </div>
      ) : (
        ""
      )}

      {/* Itinerario del programa */}
      {programas?.Itinerarios && programas.Itinerarios.length > 0 ? (
        <div className="w-[80%] mx-auto mt-4 justify-center border-2 border-black/10 rounded-md p-4 mb-4">
          <h2 className="bg-[#58167D] p-2 rounded-md text-white">Itinerario</h2>
          {programas?.Itinerarios.sort(
            (a, b) => a.IdItinerario - b.IdItinerario
          ).map((itinerario) => (
            <div key={itinerario.Dia} className="mb-4">
              <h3 className="font-bold text-lg">
                Día {itinerario.Dia} | {itinerario.Actividad}
              </h3>
              <p>{itinerario.Cuerpo}</p>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}

      {/* Condiciones del programa */}
      {programas?.Condiciones && programas.Condiciones.length > 0 ? (
        <div className="w-[80%] mx-auto mt-4 justify-center border-2 border-black/10 rounded-md p-4 mb-4">
          <h2 className="bg-[#58167D] p-2 rounded-md text-white">
            Condiciones del Programa
          </h2>
          {programas?.Condiciones.map((condicion, index) => (
            <div key={index} className="mt-2 flex">
              <Check className="mr-2 text-amber-500 w-4" />
              <p>{condicion.Texto}</p>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {/* Actividades del programa */}
      {programas?.Actividades && programas.Actividades.length > 0 ? (
        <div className="w-[80%] mx-auto mt-4 justify-center border-2 border-black/10 rounded-md p-4 mb-4">
          <h2 className="bg-[#58167D] p-2 rounded-md text-white">
            Observaciones
          </h2>
          {programas?.Actividades.map((actividad, index) => (
            <div key={index} className="mt-2 flex">
              <Check className="mr-2 text-amber-500 w-4" />
              <p>{actividad.Texto}</p>
            </div>
          ))}
        </div>
      ) : programas?.Actividades?.length === 0 ? (
        ""
      ) : null}
    </div>
  );
};

export default Detalle_Programa;
