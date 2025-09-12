import Beneficios from "@/components/Beneficios";
import Destinos from "@/components/Destinos";
//import Footer from "@/components/Footer";

//import Menu from "@/components/Menu";
import Slider from "@/components/Slider";
import Video from "@/components/Video";

export default function Home() {
  return (
    <div>
      <Slider />
      <Video />
      <Beneficios />
      <Destinos />
    </div>
  );
}
