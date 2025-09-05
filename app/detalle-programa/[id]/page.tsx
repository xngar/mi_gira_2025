/* eslint-disable @typescript-eslint/no-explicit-any */

import DetallePrograma from "@/components/DetallPrograma";
import { ProgramaDetalle } from "@/types/types";

export default async function Page({ params }: { params: { id: string } }) {
  const response = await fetch(
    `https://services.migira.cl/api/Migira/Programa/${params.id}`,
    { cache: "no-store" }
  );

  const data = await response.json();
  const programa: ProgramaDetalle = data.value.entity;

  return <DetallePrograma programa={programa} />;
}
