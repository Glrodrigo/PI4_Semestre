import justiliano from "../../../img/justiliano.jpeg"
import cidade from "../../../img/araras.jpg"
import cisne from "../../../img/cisne.jpeg"
import train from "../../../img/train.jpeg"
import square from "../../../img/square.jpg"
import mobile from "../../../img/mobile.jpeg"
import Card from "../../../functions/Card";
import location from "../../../img/locationicon.svg";
import map from "../../../img/map.svg";
import calendar from "../../../img/calendar.svg";
import arquivo from "../../../img/arquivo.svg"
import phone from "../../../img/phone.svg"
import download_icon from "../../../img/download_icon.svg"

const Recommend = () => {
  return (
    <div>
      <header className="bg-red-950 text-white mt-4 py-1">
        <div className="container mx-auto px-4"></div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 ">
          <h2 className="text-3xl font-bold mb-4 text-red-950">Populares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card title= "Pontos" icon={location} description="Pontos" image={justiliano}/>           
            <Card title= "Pontos" icon={map} description="Rotas" image={square}/>
            <Card title= "Pontos" icon={calendar} description="Eventos" image={cisne}/>
          </div>
        </section>
      </main>
      <header className="bg-red-950 text-white py-1">
            <div className="container mx-auto px-4"></div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 ">
          <h2 className="text-3xl font-bold mb-4 text-red-950">Recomendados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card title= "Arquivos" icon={arquivo} description="Arquivos" image={train}/>            
            <Card title= "Contatos" icon={phone} description="Contatos" image={square}/>
            <Card title= "Aplicativo" icon={download_icon} description="Aplicativo" image={mobile}/>
          </div>
        </section>
      </main>
      <header className="bg-red-950 text-white py-1">
            <div className="container mx-auto px-4"></div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 ">
          <h2 className="text-3xl font-bold mb-4 text-red-950">Novos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card title= "Pontos" icon={location} description="Pontos" image={justiliano}/>           
            <Card title= "Rotas" icon={map} description="Rotas" image={square}/>
            <Card title= "Eventos" icon={calendar} description="Eventos" image={cisne}/>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Recommend;