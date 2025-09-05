import DetallePrograma from "@/components/DetallPrograma";
import { ProgramaDetalle } from "@/types/types";

export default async function Page({
  params,
}: {
  params: { id: string };
}): Promise<JSX.Element> {
  const response = await fetch(
    `https://services.migira.cl/api/Migira/Programa/${params.id}`,
    { cache: "no-store" } // asegura que no se quede en cache en Vercel
  );
  const data = await response.json();

  const programa: ProgramaDetalle = data.value.entity;

  return <DetallePrograma programa={programa} />;
}
