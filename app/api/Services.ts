import axios from "axios"
import { ApiResponse, ApiResponseExchange, Credentials } from "../interfaces/interfaces";

export const Login = async (credentials:Credentials):Promise<ApiResponse<string>> => {
    try{
        const result = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/Auth`, credentials);
        const response = await result.data as ApiResponse<string>;
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Axios error:', error.response?.data || error.message);
          throw error; // Lanza el error para que pueda ser manejado por quien llame a esta función
        } else {
          console.error('Unexpected error:', error);
          throw error;
        }
      }
};

type ResponseExchange = {
  Id:number;
  FechaDesde:Date;
  FechaHasta:Date;
  CambioContado:number;
  CambioCredito: number;
};

export const Exchange = async (token:string) => {
  try {
    const EqualityFilter = {
      Take: 1,
      Sort:['Id DESC']
    };
   
    const result = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/Parameters/Valores`, EqualityFilter, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    
    console.log('RESULT API:', result)
    const response = await result.data;
    return response?.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw error; // Lanza el error para que pueda ser manejado por quien llame a esta función
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }

};
