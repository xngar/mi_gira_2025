import React, { useEffect, useState } from "react";
import Destinos_info from "./Destinos_info";
import { Programa } from "../types/types"; // Importa el tipo

const Destinos = () => {
  const [programas, setProgramas] = useState<Programa[]>([]);

  async function llamarProgramas() {
    const response = await fetch(
      "https://services.migira.cl/api/Migira/ProgramasDestacados"
    );
    const destacados = await response.json();
    setProgramas(destacados.value.entities);
    console.log(destacados.value.entities[0].Titulo);
  }

  useEffect(() => {
    llamarProgramas();
  }, []);

  return (
    <div className=" bg-white mb-10 ">
      <h2 className="text-[50px] text-[#58167D] flex justify-center items-center text-center pl-5 pr-5 font-bold">
        Nuestros destinos más populares
      </h2>
      <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 gap-10 pl-4 pr-4 lg:pl-28  lg:pr-28 pt-[50px] ">
        {programas.map((programa: Programa) => (
          <Destinos_info
            key={programa.IdPrograma}
            Titulo={programa.Titulo}
            Dias={programa.Dias}
            Noches={programa.Noches}
            Precio={programa.Precio}
            Hotels={programa.ValoresProgramas[0]?.Hotel}
            ValorPersona={programa.ValoresProgramas[0]?.Text}
            ImagenDestino={programa.UrlImage}
            IdPrograma={programa.IdPrograma}
          />
        ))}
      </div>
    </div>
  );
};

export default Destinos;
