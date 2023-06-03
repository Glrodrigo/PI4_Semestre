import Card from "../../../../functions/Card";
import map from "../../../../img/map.svg";
import igrejaMat from "../../../../img/igrejaMat.jpg"
import redentor from "../../../../img/redentor.jpg"
import capela from "../../../../img/capela.jpeg"

function CardsExample(props){
    return(
        <>
            <header className="bg-red-950 text-white py-1">
                <div className="container mx-auto px-96"></div>
            </header>
            <main className="container mx-auto px-4 py-8">
                <section className="mb-12 ">
                    <h2 className="text-3xl font-bold mb-4 text-red-950">Recomendados</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card title= "Pontos" icon={map} description="Cristo Redentor" image={redentor}/>           
                        <Card title= "Rotas" icon={map} description="Igreja Matriz" image={igrejaMat}/>
                        <Card title= "Eventos" icon={map} description="Capela" image={capela}/>
                    </div>
                </section>
            </main>
        </>

    )
}

export default CardsExample