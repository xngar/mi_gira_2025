export interface Credentials{
    Username: string;
    Password: string
  }

  export interface ApiResponse<T>{
    statusCode:number;
    value:T;
  }


  export interface ApiResponseExchange<T>{
	data:T;
  }