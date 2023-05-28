import CardInitial from "../../../functions/CardInitial";
import location from "../../../img/locationicon.jpg";
import map from "../../../img/map.png";
import calendar from "../../../img/calendar.jpg";
import tourist_plan from "../../../img/tourist_plan.jpg";
import parrot from "../../../img/parrot.jpg";
import schedule from "../../../img/schedule.jpg";

const InitialCards = () => {
  return (
    <div>

      <main className="container mx-auto px-4 py-24">
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardInitial title= "Pontos" icon={location} description="Pontos" image={parrot}/>           
            <CardInitial title= "Pontos" icon={map} description="Rotas" image={tourist_plan}/>
            <CardInitial title= "Pontos" icon={calendar} description="Eventos" image={schedule}/>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InitialCards;