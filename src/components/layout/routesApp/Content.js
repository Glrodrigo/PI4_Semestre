import igreja from "../../../img/MapaIgreja.png"
import train from "../../../img/train.jpeg"
import igrejaMp from "../../../img/igrejamapio.jpg"
import igrejaPt from "../../../img/igrejaPt.jpeg"

function Content(){
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-12 px-2">
                <img src={train} alt="Imagem inicial"/>
                <div className="text-center px-12 p-4">
                    <h1 className="font-bold text-4xl pb-16">Pode te interessar</h1>
                    <p className="text-2xl pb-16">Conhecer as principais rotas para nossos pontos 
                    turísticos é fundamental para que você se sinta à vontade, e possa 
                    aproveitar ao máximo sua experiência de viagem em nossa cidade. Sendo, algo 
                    memorável e muito satisfatório.
                    </p>
                </div>
                <div className="m-auto pt-8">
                    <button className="bg-red-950 text-white rounded p-4 hover:bg-red-600">Visualizar pontos dessa rota</button>
                </div>
                <div>
                    <header className="bg-red-950 text-white py-1">
                        <div className="container mx-auto px-4"></div>
                    </header>
                    <h1 className="font-bold text-4xl text-center py-6 mx-12">Categorias</h1>
                    <div className="text-center flex justify-start gap-2 pb-2">
                        <button className="bg-red-950 text-white rounded p-2">Natureza</button>
                        <button className="bg-red-950 text-white rounded p-2">Entretenimento</button>
                        <button className="bg-red-950 text-white rounded p-2">Cultural</button>
                    </div>
                    <img src={igreja} alt="Imagem inicial" className="w-4/5 m-auto"/>
                </div>
                
        </div>
        </>
    )
}
    
export default Content