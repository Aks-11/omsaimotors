import CustomCarousel from '../components/customCarousel';
import { homePageCarouselData } from '../data';

function Home() {
  return (
    <>
      <div className='home-page-container'>
        <div className='carousel-container'>
          <CustomCarousel items={homePageCarouselData} />
        </div>
      </div>
    </>
  );
}
export default Home;
