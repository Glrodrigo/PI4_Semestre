
import mapPhoto from "../../../img/mapPhoto.jpg"

function MainPicture() {
    return (
        <div className="relative">
          <img src={mapPhoto} alt="Arara" className="w-full"/>
          <div className="absolute top-64 pt-40 left-12 w-2/6 h-4/6 flex items-center justify-start text-white md:text-6xl xl:text-8xl font-bold font-serif ">
            <h1 className="whitespace-normal text-center">
              <br />
              Turismo
            </h1>
          </div>
          <header className="bg-red-950 text-white py-1">
            <div className="container mx-auto px-4"></div>
          </header>
          <h1 className="text-6xl text-center font-bold pt-12 pb-2">Buscar Pontos</h1>
        </div>
      
    );
  }

  export default MainPicture