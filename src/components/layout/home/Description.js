import ReactPlayer from 'react-player';
import breakfast from "../../../video/breakfast.mp4";
import clothing from "../../../video/clothing.mp4";
import kids from "../../../video/kids.mp4";

function Description() {
    return (
        <div className=" w-full h-full font-serif ">
            <h1 className="text-6xl font-bold whitespace-normal text-center p-20">
                Em busca de novos Desafios?
            </h1>
            <div className="grid grid-cols-2">
                <div >
                    <p className="text-left whitespace-normal text-3xl p-12 py-40 ">
                        Descubra as belezas de nossa cidade!  
                        <br/> Explore uma riqueza cultural, com pontos turísticos deslumbrantes e
                        mergulhe em nossa <b>gastronomia</b>.
                    </p>
                </div>
                <div className='flex justify-center pt-12 p-12'>
                    <ReactPlayer url={breakfast} controls={false} playing={true} loop={true}/>             
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className='flex justify-center pt-12 p-12'>
                    <ReactPlayer url={clothing} controls={false} playing={true} loop={true}/>             
                </div>
                <div >
                    <p className="text-left whitespace-normal text-3xl p-12 py-40 ">
                    Viva momentos inesquecíveis em nossa cidade, faça <b>compras</b> em lugares
                    encantadores, desfrute de relaxamento e uma grande diversão.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 pb-4">
                <div >
                    <p className="text-left whitespace-normal text-3xl p-12 py-40 ">
                    Satisfaça sua curiosidade e crie <b>memórias</b> para toda a vida em uma
                    cidade repleta de surpresas e experiências.
                    </p>
                </div>
                <div className='flex justify-center pt-12 p-12'>
                    <ReactPlayer url={kids} controls={false} playing={true} loop={true}/>             
                </div>
            </div>
            <h1 className="text-6xl font-bold whitespace-normal text-center text-white p-4 bg-red-950">
                Conheça Araras:
            </h1>
        </div>
    );
  }

export default Description