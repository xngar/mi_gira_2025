'use client'
import Beneficios from "@/components/Beneficios";
import Destinos from "@/components/Destinos";
//import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";
//import Menu from "@/components/Menu";
import Slider from "@/components/Slider";
import Video from "@/components/Video";
import { getCookie, setCookie } from "cookies-next";
import { Login } from "./api/Services";
import { Credentials } from "./interfaces/interfaces";
import { useEffect } from "react";

const token = getCookie('Token') as string;

export default function Home() {

 const logeo = async () => {
    const _credencial: Credentials = {
      Username: `${process.env.NEXT_PUBLIC_API_USERNAME}`,
      Password: `${process.env.NEXT_PUBLIC_API_PASSWORD}`
    };

    const response = await Login(_credencial);
    if (response.statusCode === 200) {
      setCookie("Token", response.value);
    }
  };

  useEffect(()=>{
    if(!token){
      logeo();
    }
  },[])


  return (
    <div className="">
      {/* <Menu /> */}
      <Slider />
      <Video />
      <Beneficios />
      <Destinos />
      <Formulario />
      {/* <Footer /> */}
    </div>
  );
}
