/* eslint-disable @typescript-eslint/no-explicit-any */

import DetallePrograma from "@/components/DetallPrograma";
import { ProgramaDetalle } from "@/types/types";

export default async function Page(props: any) {
  const id = props.params.id;

  const response = await fetch(
    `https://services.migira.cl/api/Migira/Programa/${id}`,
    { cache: "no-store" }
  );
  const data = await response.json();
  const programa: ProgramaDetalle = data.value.entity;

  return <DetallePrograma programa={programa} />;
}
