import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

import { getCookie } from "cookies-next";

import { AlignJustify } from "lucide-react";
import { Ship } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Luggage } from "lucide-react";
import { Headset } from "lucide-react";
import { Plane } from "lucide-react";
import { Exchange } from "@/app/api/Services";

const token = getCookie("Token") as string;

type TypeExchange = {
  Id: number;
  FechaDesde: Date;
  FechaHasta: Date;
  CambioContado: number;
  CambioCredito: number;
};

const Menu = () => {
  const [cambio, setCambio] = useState<TypeExchange | null>(null);

  const exChange = async (token: string) => {
    try {
      const response = await Exchange(token);
      console.log(response, "response del exchange");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token) {
      exChange(token);
    }
  }, []);

  return (
    <div className="w-full lg:w-full  bg-[#58167D] flex   p-5 pt-5 items-center h-[65px] sm:pl-20 pl-10 pr-10 sm:pr-20 ">
      {/* menu mobile */}
      <div className="block sm:hidden ">
        <Sheet>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SheetTrigger className="text-white border-1 border-white p-1">
              <AlignJustify style={{ width: "15px", height: "15px" }} />
            </SheetTrigger>
          </div>
          <SheetContent>
            <SheetHeader>
              <SheetTitle></SheetTitle>

              <SheetDescription>
                <li className="animacion-botones">Home</li>
                <li className="animacion-botones">Paquetes</li>
                <li className="animacion-botones">Lujos</li>
                <li className="animacion-botones">Cruceros</li>
                <li className="animacion-botones">Contacto</li>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div>
        <Image
          src="/gira.png"
          width={50}
          height={50}
          alt="logo"
          className="md:block lg:hidden  block absolute top-3 right-8 sm:top-3 sm:right-8 md:top-4 md:left-6 md:w-[40px]"
        />
      </div>

      {/* fin menu mobile */}
      <div className="lg:w-[30%] md:hidden lg:block hidden">
        <Image src="/gira.png" width={50} height={50} alt="logo" />
      </div>
      <div className="flex justify-around gap-[100px] ">
        <div className=" w-[60%] ">
          <ul className="hidden md:flex gap-3.5 justify-around text-white  ">
            <li className="animacion-botones ">
              <span>
                <Plane />
              </span>
              Home
            </li>
            <li className="animacion-botones">
              <span>
                <Luggage />
              </span>
              Paquetes
            </li>
            <li className="animacion-botones">
              <span>
                <Sparkles />
              </span>
              Lujos
            </li>
            <li className="animacion-botones ">
              <span>
                <Ship />{" "}
              </span>
              Cruceros
            </li>
            <li className="animacion-botones">
              <span>
                <Headset />
              </span>
              Contacto
            </li>
          </ul>
        </div>
        {/* menu movil */}

        <div className="hidden md:flex items-center justify-baseline w-[35%]">
          <p className="text-white text-[12px] ">
            Viernes, 02 de Mayo del 2025 / contado: 950 - crédito: 960
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
