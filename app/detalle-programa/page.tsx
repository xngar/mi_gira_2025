import React from "react";

const Detalle_Programa = () => {
  return (
    <div>
      {/* Portada del programa| */}
      <div>
        <img src="ruta/a/la/imagen.jpg" alt="Imagen del programa" />
      </div>
      {/* Información del programa destino */}
      <div>
        <span>Orlando</span>
        <span>Hotel Orlando Florida</span>
        <span>5 días / 4 noches</span>
      </div>
      {/* Valores del programa */}

      <div>
        <span>Valores por persona en base habitación doble </span>
        <span>Precio desde:</span>
        <span>$1,200.00</span>
        <span>Incluye impuestos, tasas y cargos</span>
      </div>
      {/* detalles del programa */}
      <div>
        <p>El programa Incluye</p>
        <ul>
          <li>Alojamiento en hotel 5 estrellas</li>
          <li>Desayuno buffet diario</li>
          <li>Transporte aeropuerto - hotel - aeropuerto</li>
          <li>Excursiones y entradas a parques</li>
        </ul>
      </div>

      <div>
        <h2>Itinerario</h2>
        <p>Día 1: Llegada a Orlando</p>
        <p>Día 2: Visita a Magic Kingdom</p>
        <p>Día 3: Día libre para compras</p>
        <p>Día 4: Excursión a los Everglades</p>
        <p>Día 5: Regreso a casa</p>
      </div>
    </div>
  );
};

export default Detalle_Programa;
