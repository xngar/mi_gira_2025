import axios from "axios"
<<<<<<< HEAD
import { ApiResponseAuth, Credentials, ResponseExchange } from "../interfaces/interfaces";
=======
import { ApiResponse, Credentials, ResponseExchange } from "../interfaces/interfaces";
>>>>>>> d1c1083bc17743dfa3e65967429a7359ee273a3b

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



export const Exchange = async (token:string): Promise<ResponseExchange> => {
  try {
    const EqualityFilter = {
      Take: 1,
      Sort:['Id DESC']
    };
   
    const result = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/Parameters/Valores`, EqualityFilter, {
        headers: {
            Authorization: `Bearer ${token.trim()}`,
            'Content-Type': 'application/json'
        }
    });
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
