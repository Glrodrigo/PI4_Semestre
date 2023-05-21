import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ContainerCarousel from "../layout/home/ContainerCarousel";
import bonde from "../../img/bonde.jpeg"
import fonte from "../../img/Fonte.jpg"
import cultural from "../../img/cultural.jpg"



function MyCarousel() {
    return (
      <ContainerCarousel>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000} >
          <div>
            <img src={bonde} alt="Slide 1"/>
            <div className='flex justify-start bg-red-950 p-8'>
              <legend>
                <p className='text-left text-white whitespace-normal text-4xl p-4'>
                  <b>Bonde Turístico</b>
                </p>
                <p className='text-white text-left text-2xl whitespace-normal p-4'>
                O Bonde sobre Rodas é a nova atração turística de Araras 
                e tem como missão mostrar as riquezas históricas e naturais da cidade
                </p>
              </legend>
            </div>
          </div>
          <div>
            <img src={cultural} alt="Slide 2"/>
            <div className='flex justify-start bg-red-950 p-8'>
              <legend>
                <p className='text-left text-white whitespace-normal text-4xl p-4'>
                  <b>Centro Cultural</b>
                </p>
                <p className='text-white text-left text-2xl whitespace-normal p-4'>
                O Centro Cultural Leny de Oliveira Zurita possui um amplo auditório com 150 lugares 
                e espaço para eventos como: Exposições, Congressos, Wokshops, Feiras e outros
                </p>
              </legend>
            </div>
          </div>
          <div>
            <img src={fonte} alt="Slide 3"/>
            <div className='flex justify-start bg-red-950 p-8'>
              <legend>
                <p className='text-left text-white whitespace-normal text-4xl p-4'>
                  <b>Fonte Luminosa</b>
                </p>
                <p className='text-white text-left text-2xl whitespace-normal p-4'>
                A Fonte Luminosa é um ponto de referência 
                icônico da cidade. Trata-se de uma bela fonte com um design elegante e iluminação vibrante, 
                que proporciona um espetáculo visual encantador durante a noite. 
                </p>
              </legend>
            </div>
          </div>
        </Carousel>
        <div className='bg-red-950 w-full flex justify-center pb-12'>
        <button className="bg-gray-300 text-red-950 hover:bg-red-600 hover:text-white font-bold py-4 px-20 rounded">
          Visitar
        </button>
        </div>
      </ContainerCarousel>
    );
  }

  export default MyCarousel