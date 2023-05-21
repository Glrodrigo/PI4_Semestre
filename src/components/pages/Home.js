import MyCarousel from "../layout/MyCarousel"
import MainPicture from "../layout/home/MainPicture"
import Tourism from "../layout/home/Tourism"
import Description from "../layout/home/Description"

function Home(){
    return (
    <>
        <MainPicture/>
        <Description/>
        <MyCarousel/>
        <Tourism/>
    </>

)
}

export default Home