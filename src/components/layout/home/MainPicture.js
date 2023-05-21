
import birdPicture from "../../../img/arara_azul.jpg"

function MainPicture() {
    return (
        <div className="relative">
          <img src={birdPicture} alt="Arara" className="w-full"/>
          <div className="absolute top-48 left-12 w-full h-full flex items-center justify-start text-white md:text-6xl xl:text-8xl font-bold font-serif ">
            <h1 className="whitespace-normal text-center">
              Bem vindo <br />
              ao <br />
              Turismo
            </h1>
          </div>
        </div>
      
    );
  }

  export default MainPicture