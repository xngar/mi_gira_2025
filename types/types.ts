export interface ValorPrograma {
  Hotel?: string;
  Text?: string;
  // Agrega otras propiedades de ValoresProgramas si son necesarias
}

export interface Programa {
  Id: number;
  Titulo: string;
  Dias: string;
  Noches: string;
  Precio: string;
  UrlImage: string;
  ValoresProgramas: ValorPrograma[];
}

export interface ApiResponse {
  value: {
    entities: Programa[];
  };
}