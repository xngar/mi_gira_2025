import Image from "next/image";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";

const Menu = () => {
  return (
    <div className="w-full  bg-[#58167D] flex justify-between p-8 pt-5 items-center ">
      {/* menu mobile */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="text-white border-2 border-white p-3 ">
            <AlignJustify />
          </SheetTrigger>
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
      {/* fin menu mobile */}
      <div className="lg:w-[200px]">
        <Image src="/gira.png" width={70} height={70} alt="logo" />
      </div>
      <div className="flex justify-around gap-[100px] ">
        <div className=" w-[600px] ">
          <ul className="hidden md:flex gap-3.5 justify-around text-white  ">
            <li className="animacion-botones ">Home</li>
            <li className="animacion-botones">Paquetes</li>
            <li className="animacion-botones">Lujos</li>
            <li className="animacion-botones">Cruceros</li>
            <li className="animacion-botones">Contacto</li>
          </ul>
        </div>
        {/* menu movil */}

        <div className="hidden md:flex items-center justify-baseline">
          <p className="text-white">
            Viernes, 02 de Mayo del 2025 / contado: 950 - crédito: 960
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
