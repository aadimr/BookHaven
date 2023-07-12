import BestSellingBookEverCarousel from "../../carousel/bestSellingBookEverCarousel/BestSellingBookEverCarousel";
import MyCarousel from "../../carousel/showcaseCarousel/ShowCaseCarousel";
import Newsletter from "../../newsletter/Newsletter";

function Home() {
  return (
    <div>
      <MyCarousel/>
      <BestSellingBookEverCarousel/>
      <Newsletter/> 
    </div>
  )
}

export default Home;
