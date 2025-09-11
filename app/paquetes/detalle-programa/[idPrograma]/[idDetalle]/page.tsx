/* eslint-disable @typescript-eslint/no-explicit-any */

import { getProgramaDetalle } from "@/app/api/Services";
import { Program } from "@/app/interfaces/interfaces";
import DetallePrograma from "@/components/DetallPrograma";

export default async function Page(props: any) {
  const idPrograma: number = props.params?.idPrograma;
  const idDetalle: number = props.params?.idDetalle;

  const response = await getProgramaDetalle(idPrograma, idDetalle);

  if (response.statusCode === 200) {
    const programa: Program = response.value.entities[0];

    return <DetallePrograma programa={programa} />;
  }

  return <></>;
}
