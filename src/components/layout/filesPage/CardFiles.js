import Card from "../../../functions/Card";
import arquivo from "../../../img/arquivo.svg";
import square from "../../../img/square.jpg"
import redentor from "../../../img/redentor.jpg"
import palco from "../../../img/palco.jpeg"
import lagoa from "../../../img/lagoa.jpeg"

function CardFiles(props){
    return(
        <>
            <header className="bg-red-950 text-white py-1">
                <div className="container mx-auto px-96"></div>
            </header>
            <main className="container mx-auto px-4 pt-24 pb-12 flex justify-center">
                <section className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card title= "Pontos" icon={arquivo} description="A Cidade" image={square}/>           
                        <Card title= "Rotas" icon={arquivo} description="Infraestrutura" image={redentor}/>
                        <Card title= "Eventos" icon={arquivo} description="Contatos" image={palco}/>
                        <Card title= "Eventos" icon={arquivo} description="Turismo" image={lagoa}/>
                    </div>
                </section>
            </main>
        </>

    )
}

export default CardFiles