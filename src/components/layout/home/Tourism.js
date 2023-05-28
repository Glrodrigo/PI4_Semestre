//import React from 'react';
import justiliano from "../../../img/justiliano.jpeg"
import cidade from "../../../img/araras.jpg"
import cisne from "../../../img/cisne.jpeg"
import train from "../../../img/train.jpeg"
import square from "../../../img/square.jpg"
import mobile from "../../../img/mobile.jpeg"
import Card from "../../../functions/Card";
import location from "../../../img/locationicon.jpg";
import map from "../../../img/map.png";
import calendar from "../../../img/calendar.jpg";
import arquivo from "../../../img/arquivo.jpg"
import phone from "../../../img/phone.jpg"
import download_icon from "../../../img/download_icon.jpg"

const Tourism = () => {
  return (
    <div>
      <h1 className="text-6xl text-center font-bold p-8">Principais Atividades</h1>
      <header className="bg-red-950 text-white py-1">
        <div className="container mx-auto px-4">
          
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 ">
          <h2 className="text-3xl font-bold mb-4 text-red-950">Explore as Atrações Locais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card title= "Pontos" icon={location} description="Pontos" image={justiliano}/>           
            <Card title= "Pontos" icon={map} description="Rotas" image={cidade}/>
            <Card title= "Pontos" icon={calendar} description="Eventos" image={cisne}/>
          </div>
        </section>
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title= "Pontos" icon={arquivo} description="Arquivos" image={train}/>           
            <Card title= "Pontos" icon={phone} description="Contatos" image={square}/>
            <Card title= "Pontos" icon={download_icon} description="Aplicativo" image={mobile}/>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Tourism;