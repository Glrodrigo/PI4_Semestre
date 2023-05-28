import MainPicture from "../layout/home/MainPicture"
import Description from "../layout/home/Description"
import InitialCards from "../layout/home/InitialCards"
import MyCarousel from "../layout/MyCarousel"
import Tourism from "../layout/home/Tourism"

function Home(){
    return (
    <>
        <MainPicture/>
        <Description/>
        <InitialCards/>
        <MyCarousel/>
        <Tourism/>
    </>

    )
}

export default Home