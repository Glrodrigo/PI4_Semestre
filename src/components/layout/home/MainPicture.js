import birdPicture from "../../../img/arara_azul.jpg"

function MainPicture() {
    return (
        <div className="relative">
          <img src={birdPicture} alt="Arara" className="w-full "/>
          <div className="absolute top-32 pt-56 left-12 w-3/6 h-5/6 flex items-center justify-start text-white md:text-6xl xl:text-8xl font-bold font-serif ">
            <h1 className="whitespace-normal text-center">
              Bem vindo <br />
              a <br />
              Araras
            </h1>
          </div>
          <header className="bg-red-950 text-white py-1">
            <div className="container mx-auto px-4"></div>
          </header>
        </div>
      
    );
  }

  export default MainPicture