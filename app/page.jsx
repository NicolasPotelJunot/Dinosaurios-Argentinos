import "../styles/globals.css"
import Image from "next/image";

export default function Home() {
  return (
    <section className=""> 
    
    <Image 
      src="/assets/img/logo/logo-white-v2.svg"
      width="500"
      height="500"
      alt="logo dinosaurios argentinos"
    />     

      <div className="">
        <p className="text-shadow">
          Dinosarios es mi primer gran proyecto como programador front-end.
        </p>
        <p>
          Me aventure hacer esta aplicación, soy amante de la tecnología y de
          los dinosaurios.
        </p>
        <p>
          Como idea me surgió como una necesidad... Siempre quise una página
          como esta, solo dinos argentinos.💕
        </p>
      </div>

    </section>
  );
}
