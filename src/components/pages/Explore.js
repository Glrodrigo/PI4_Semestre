import MainPicture from "../layout/explore/MainPicture.js"
import SearchBox from "../layout/explore/SearchBox.js"
import MyCarousel from "../layout/MyCarousel"
import Recommend from "../layout/explore/Recommend.js"

function Explore(){
    return (
        <>
            <MainPicture/>
            <SearchBox/>
            <MyCarousel/>
            <Recommend/>
        </>
    
    )
}

export default Explore