export interface ValorPrograma {
  Hotel?: string;
  Text?: string;
  // Agrega otras propiedades de ValoresProgramas si son necesarias
}

export interface Programa {
  IdPrograma: number;
  Titulo: string;
  Dias: string;
  Noches: string;
  Precio: string;
  UrlImage: string;
  ValoresProgramas: ValorPrograma[];
}

export interface Itinerario {
  Dia: number;
  Cuerpo: string;
}

export interface Incluye {
  Texto: string;
}

export interface ProgramaDetalle {
  IdPrograma: number;
  Subtitulo: string;
  Titulo: string;
  Dias: string;
  Noches: string;
  Precio: string;
  UrlImage: string;
  ValoresProgramas: ValorPrograma[];
  Itinerarios: Itinerario[];
  Texto: string;
  Incluyes: Incluye[];
}

export interface ApiResponse {
  value: {
    entities: Programa[];
  };
}