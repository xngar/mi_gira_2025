"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Hotel, Star, Check } from "lucide-react";
import { ProgramaDetalle } from "@/types/types";

export default function DetallePrograma({
  programa,
}: {
  programa: ProgramaDetalle;
}) {
  const [data, setData] = useState<ProgramaDetalle>(programa);

  useEffect(() => {
    setData(programa);
  }, [programa]);

  return (
    <div>
      {/* Portada */}
      <div className="w-[80%] h-[300px] relative justify-center mx-auto">
        <Image
          src={data?.UrlImage || "/chile.jpg"}
          alt="Imagen del programa"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-4xl mt-2"
        />
      </div>

      <div className="flex w-[80%] mx-auto">
        {/* Información */}
        <div className="justify-start mx-auto w-[80%] flex flex-col mt-4">
          <span className="font-bold text-[24px]">{data?.Titulo}</span>
          <div className="text-3xl flex items-center">
            <Hotel className="bg-[#58167D] p-1 text-white rounded-md mr-2" />{" "}
            <span>{data?.Subtitulo ?? "Sin información disponible"}</span>
          </div>

          {/* Info destino */}
          <div className="mt-2 w-[95%]">
            <h2 className="font-bold">Información del Destino</h2>
            {data?.Itinerarios?.map((it) =>
              it.Tipo === "1" ? (
                <div key={it.Dia} className="mb-4">
                  <p>{it.Cuerpo}</p>
                </div>
              ) : null
            )}
          </div>
        </div>

        {/* Valores */}
        <div className="bg-gray-200 w-[80%] h-[200px] mx-auto flex flex-col mt-4 rounded-sm p-3 relative">
          <div className="bg-amber-300 p-2 absolute -top-5 right-0 rounded-md text-sm flex">
            <Star className="mr-2" /> {data?.Texto}
          </div>
          <span className="font-bold text-lg text-[#58167D]">
            {data?.Dias} días / {data?.Noches} noches
          </span>
          <span>Precio desde:</span>
          <span className="text-3xl font-bold text-[#58167D]">
            ${data?.Precio}
          </span>
          <span>Incluye impuestos, tasas y cargos</span>
        </div>
      </div>

      {/* Valores del programa */}
      {data?.ValoresProgramas?.length > 0 && (
        <div className="w-[80%] mx-auto mt-4 border-2 border-black/10 rounded-md p-4 mb-4">
          <h2 className="bg-[#58167D] p-2 rounded-md text-white">
            Valores del Programa
          </h2>
          <ul className="list-none mt-2">
            {data.ValoresProgramas.map((valor, idx) => (
              <li key={idx} className="mb-2">
                <div className="flex items-center">
                  <Check className="mr-2 text-amber-500 w-4" /> Hotel:{" "}
                  {valor.Hotel}
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 text-amber-500 w-4" /> Habitación:{" "}
                  {valor.Habitacion}
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 text-amber-500 w-4" /> Precio: $
                  {valor.Precio}
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 text-amber-500 w-4" /> {valor.Text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Incluye */}
      {data?.Incluyes?.length > 0 && (
        <div className="w-[80%] mx-auto mt-4 border-2 border-black/10 rounded-md p-4 flex gap-2 justify-between">
          <div>
            <h2 className="bg-[#58167D] p-2 rounded-md text-white">
              El programa Incluye
            </h2>
            <ul className="list-none mt-2">
              {data.Incluyes.map((inc, idx) => (
                <li key={idx} className="flex items-center">
                  <Check className="mr-2 text-amber-500 w-4" /> {inc.Texto}
                </li>
              ))}
            </ul>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data?.Video || "" }} />
        </div>
      )}

      {/* Itinerario */}
      {data?.Itinerarios?.length > 0 && (
        <div className="w-[80%] mx-auto mt-4 border-2 border-black/10 rounded-md p-4 mb-4">
          <h2 className="bg-[#58167D] p-2 rounded-md text-white">Itinerario</h2>
          {data.Itinerarios.sort((a, b) => a.IdItinerario - b.IdItinerario).map(
            (it) => (
              <div key={it.Dia} className="mb-4">
                <h3 className="font-bold text-lg">
                  Día {it.Dia} | {it.Actividad}
                </h3>
                <p>{it.Cuerpo}</p>
              </div>
            )
          )}
        </div>
      )}

      {/* Condiciones */}
      {data?.Condiciones?.length > 0 && (
        <div className="w-[80%] mx-auto mt-4 border-2 border-black/10 rounded-md p-4 mb-4">
          <h2 className="bg-[#58167D] p-2 rounded-md text-white">
            Condiciones del Programa
          </h2>
          {data.Condiciones.map((c, idx) => (
            <div key={idx} className="mt-2 flex">
              <Check className="mr-2 text-amber-500 w-4" />
              <p>{c.Texto}</p>
            </div>
          ))}
        </div>
      )}

      {/* Actividades */}
      {data?.Actividades?.length > 0 && (
        <div className="w-[80%] mx-auto mt-4 border-2 border-black/10 rounded-md p-4 mb-4">
          <h2 className="bg-[#58167D] p-2 rounded-md text-white">
            Observaciones
          </h2>
          {data.Actividades.map((act, idx) => (
            <div key={idx} className="mt-2 flex">
              <Check className="mr-2 text-amber-500 w-4" />
              <p>{act.Texto}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
