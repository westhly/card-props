import Card from "./Card";
import img from "./img.jpg";
import imgSebastian from "./sebastian.jpg";
import imgSamir from "./samir.webp";
import imgKelvin from "./kelvin.jpg";
import Colors from "./colors";
const App = () => {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2  gap-y-4  items-center justify-center min-h-screen from-gray-700 via-gray-800 to-gray-900 bg-gradient-to-br">
        <Card
          nombre="Westhly Sarabia"
          img={img}
          description="Estudiante de Desarrollo WEB"
          
        //   color1="bg-amber-400/90 group-hover:bg-amber-600/90 z-10"
        //   color2="bg-amber-300/90 group-hover:bg-amber-500/90 z-20"
        //   color3=" bg-amber-200/90 group-hover:bg-amber-400/90 z-30"
        //   color4="bg-amber-100/90 group-hover:bg-amber-300/90 z-40"
        //   color5="bg-amber-50/90 group-hover:bg-amber-200/90 z-50"
        
        />
        <Card
          nombre="Kelvin Orcasita"
          img={imgKelvin}
          description="Estudiante de Desarrollo WEB"
        //   color1="bg-red-400/90 group-hover:bg-red-600/90 z-10"
        //   color2="bg-red-300/90 group-hover:bg-red-500/90 z-20"
        //   color3=" bg-red-200/90 group-hover:bg-red-400/90 z-30"
        //   color4="bg-red-100/90 group-hover:bg-red-300/90 z-40"
        //   color5="bg-red-50/90 group-hover:bg-red-200/90 z-50"
        />
        <Card
          nombre="Sebastian Garcia"
          img={imgSebastian}
          description="Desarrollador Full-Stack"
        //   color1="bg-lime-400/90 group-hover:bg-lime-600/90 z-10"
        //   color2="bg-lime-300/90 group-hover:bg-lime-500/90 z-20"
        //   color3=" bg-lime-200/90 group-hover:bg-lime-400/90 z-30"
        //   color4="bg-lime-100/90 group-hover:bg-lime-300/90 z-40"
        //   color5="bg-lime-50/90 group-hover:bg-lime-200/90 z-50"
        />
        <Card
          nombre="Samir Gonzales"
          img={imgSamir}
          description="Estudiante de Desarrollo WEB"
        //   color1="bg-violet-400/90 group-hover:bg-violet-600/90 z-10"
        //   color2="bg-violet-300/90 group-hover:bg-violet-500/90 z-20"
        //   color3=" bg-violet-200/90 group-hover:bg-violet-400/90 z-30"
        //   color4="bg-violet-100/90 group-hover:bg-violet-300/90 z-40"
        //   color5="bg-violet-50/90 group-hover:bg-violet-200/90 z-50"
        />
      </div>
    </>
  );
};

export default App;
