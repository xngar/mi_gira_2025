import axios from "axios"

import { ApiListResponse, Program, ResponseExchange } from "../interfaces/interfaces";



export const Exchange = async (): Promise<ResponseExchange> => {
  try {
    const EqualityFilter = {
      Take: 1,
      Sort:['Id DESC']
    };
   
    const result = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/Exchange/GetExchange`, EqualityFilter, {});
    const response = await result.data.entities[0] as ResponseExchange;
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

export const getProgramasDestacados = async (): Promise<ApiListResponse<Program[]>> => {
  try{
    const result = await axios.get(`${process.env.NEXT_PUBLIC_API_MIGIRA}/api/Migira/ProgramasDestacados`);
    const response = await result.data as ApiListResponse<Program[]>;
    return response;
  }catch(error){
     if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw error; // Lanza el error para que pueda ser manejado por quien llame a esta función
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }
}