import igreja from "../../../../img/MapaIgreja.png"
import igrejaFt from "../../../../img/igrejaapa.jpg"
import igrejaMp from "../../../../img/igrejamapio.jpg"
import igrejaPt from "../../../../img/igrejaPt.jpeg"

function SidePicture(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-12 px-2">
                <img src={igrejaFt} alt="Imagem inicial"/>
                <div className="text-center px-12">
                    <h1 className="font-bold text-4xl pb-12">Igreja Nossa Senhora Aparecida</h1>
                    <p className="text-2xl pb-16">A igreja foi criada por um arquiteto espanhol e sua construção iniciou-se
                        em 1965 com a vinda do Padre Santo Marino. É muito visitada e admirada
                        por seus vitrais coloridos com temas Bíblicos. Foi tombada pelo município
                        em 1995.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 py-6 px-2">
                <img src={igrejaMp} alt="Imagem 1"/>
                <img src={igrejaMp} alt="Imagem 2"/>
                <img src={igrejaPt} alt="Imagem 3" className="w-full h-lg"/>
                <img src={igrejaPt} alt="Imagem 3" className="w-full h-lg"/>
                </div>
                <div>
                    <header className="bg-red-950 text-white py-1">
                        <div className="container mx-auto px-4"></div>
                    </header>
                    <h1 className="font-bold text-4xl text-center py-6 mx-12">Categorias</h1>
                    <div className="text-center flex justify-start gap-2 pb-2">
                        <button className="bg-red-950 text-white rounded p-2">Religioso</button>
                        <button className="bg-red-950 text-white rounded p-2">Cultural</button>
                    </div>
                    <img src={igreja} alt="Imagem inicial" className="w-4/5 m-auto"/>
                </div>
                
        </div>
    )
}

export default SidePicture