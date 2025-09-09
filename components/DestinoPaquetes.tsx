"use client";
import { Area } from "@/app/interfaces/interfaces";
import Image from "next/image";
import React from "react";

const DestinoPaquetes = ({ areas }: { areas: Area }) => {
  return (
    <div className="flex flex-wrap gap-4 shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="w-[250px] bg-amber-400 rounded-2xl relative h-[300px] overflow-hidden">
        <Image
          src="/default.jpeg"
          alt="destinos"
          fill
          className="object-cover rounded-2xl"
        />

        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-purple-700 to-transparent rounded-2xl z-10" />

        <div className="absolute inset-0 flex items-end pb-8 justify-center z-20">
          <h2 className="text-white font-bold text-2xl text-center">
            <span className="text-yellow-400">{areas.Nombre}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DestinoPaquetes;
