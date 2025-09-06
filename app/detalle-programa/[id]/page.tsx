/* eslint-disable @typescript-eslint/no-explicit-any */

import { getPrograma } from "@/app/api/Services";
import { Program } from "@/app/interfaces/interfaces";
import DetallePrograma from "@/components/DetallPrograma";

export default async function Page(props: any) {
  const id: number = props.params?.id;

  const response = await getPrograma(id);
  if (response.statusCode === 200) {
    const programa: Program = response.value.entity;
    return <DetallePrograma programa={programa} />;
  }

  return <></>;
}
