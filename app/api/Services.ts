import axios from "axios"

import { ApiResponseAuth, Credentials, ResponseExchange } from "../interfaces/interfaces";

export const Login = async (credentials:Credentials):Promise<ApiResponseAuth> => {
    try{
        const result = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/Auth`, credentials);
        const response = await result.data as ApiResponseAuth;
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



export const Exchange = async (): Promise<ResponseExchange> => {
  try {
    const EqualityFilter = {
      Take: 1,
      Sort:['Id DESC']
    };
   
    const result = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/Exchange/GetExchange`, EqualityFilter, {
       
    });
    const response = await result.data.entities[0] as ResponseExchange;
    console.log(response,"mensaje");
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

export const ObtenerCambio = async () => {

  const cambio =  await fetch('https://api.exchangerate-api.com/v4/latest/USD');
  const resultado = await cambio.json();
  return resultado; 
}