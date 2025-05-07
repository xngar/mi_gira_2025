"use client";
import Image from "next/image";
import React from "react";

const Formulario: React.FC = () => {
  return (
    <div className="bg-[#58167D] flex justify-center items-center min-h-screen">
      <form
        className="bg-white p-10 rounded-2xl flex w-[1000px] gap-10"
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const res = await fetch("/api/formulario", {
            method: "POST",
            body: formData,
          });
          const data = await res.json();
          console.log(data);
        }}
      >
        <div className="w-[70%]">
          <h2 className="text-[40px] text-[#58167D]">
            ¿Necesita más información?
          </h2>
          <h3 className="text-[30px] pb-5">Contáctanos!</h3>
          <label className="block mb-4" htmlFor="nombre">
            <p className="mb-2">Nombre</p>
            <input
              className="estilo-botones"
              type="text"
              name="nombre"
              id="nombre"
              required
              placeholder="Tu nombre"
              title="Este campo es obligatorio"
            />
          </label>
          <label className="block mb-4" htmlFor="telefono">
            <p className="mb-2">Telefono</p>
            <input
              className="estilo-botones"
              type="tel"
              name="telefono"
              id="telefono"
              required
              pattern="[0-9]{10}"
              placeholder="Tu telefono"
              title="Este campo es obligatorio y debe tener 10 digitos"
            />
          </label>
          <label className="block mb-4" htmlFor="direccion">
            <p className="mb-2">Direccion</p>
            <input
              className="estilo-botones"
              type="text"
              name="direccion"
              id="direccion"
              required
              placeholder="Calle y numero"
              title="Este campo es obligatorio"
            />
          </label>
          <label className="block mb-4" htmlFor="correo">
            <p className="mb-2">E-mail</p>
            <input
              className="estilo-botones"
              type="email"
              name="correo"
              id="correo"
              required
              placeholder="E-mail"
              title="Este campo es obligatorio"
            />
          </label>

          <button
            className="bg-[#58167D] p-2 rounded-md w-full text-white"
            type="submit"
          >
            Enviar
          </button>
        </div>
        <div className="relative w-[40%]">
          <Image
            src="/jovenes.jpg"
            alt="jovenes"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
