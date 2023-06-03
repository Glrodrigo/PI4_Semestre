import filesDocs from "../../../img/filesDocs.jpg"

function MainPicture() {
    return (
        <div className="relative">
          <img src={filesDocs} alt="Arara" className="w-full"/>
          <div className="absolute top-64 pt-40 left-12 w-2/6 h-4/6 flex items-center justify-start text-white md:text-6xl xl:text-8xl font-bold font-serif ">
            <h1 className="whitespace-normal text-center">
              <br />
              Arquivos
            </h1>
          </div>
          <header className="bg-red-950 text-white py-1">
            <div className="container mx-auto px-4"></div>
          </header>
        </div>
      
    );
  }

  export default MainPicture