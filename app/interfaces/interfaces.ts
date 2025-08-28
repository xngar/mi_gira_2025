export interface Credentials{
    Username: string;
    Password: string
  }

  export interface ResponseExchange {
   CambioContado:number;
    CambioCredito:number;
    DateUp:string;
    FechaDesde:string;
    FechaHasta:string;
    Id:number;
    UserId:number;
};

  export interface ApiResponse<T>{
    statusCode:number;
    value:T;
  }


  export interface ApiResponseExchange<T>{
	data:T;
  }