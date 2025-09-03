export const formatNumber = (number: number): string => {
  // Intl.NumberFormat es un constructor para objetos que habilitan el formato de números sensibles al lenguaje.
  // 'es-CL' representa la configuración regional para Chile, que usa el punto como separador de miles.
  return new Intl.NumberFormat('es-CL').format(number);
};