import Beneficios from "@/components/Beneficios";
import Destinos from "@/components/Destinos";
//import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";
//import Menu from "@/components/Menu";
import Slider from "@/components/Slider";
import Video from "@/components/Video";

export default function Home() {
  return (
    <div className="">
      <Slider />
      <Video />
      <Beneficios />
      <Destinos />
      <Formulario />
    </div>
  );
}
