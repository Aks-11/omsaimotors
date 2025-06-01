import CustomCarousel from '../components/customCarousel';
import { homePageCarouselData } from '../data';
import EngineIcon from '../assets/icons/engine.svg';
import MotorcycleIcon from '../assets/icons/motorcycle.svg';
import MobilePhone from '../assets/homePage/mobile.png';
import Calendar from '../assets/homePage/calendar.png';
import Clock from '../assets/homePage/clock.png';
import SpannerIcon from '../assets/icons/spanner.svg';
import PulsarN150 from '../assets/homePage/bikes/pulsar-n150.png';
import Pulsar250 from '../assets/homePage/bikes/pulsar-250.png';
import Avenger220 from '../assets/homePage/bikes/avenger-220.png';
import Dominar400 from '../assets/homePage/bikes/dominar-400.png';
import AdBanner from '../assets/homePage/bikes/ad-banner.png';
import BikeList from '../components/bikeList';
import { bikeData } from '../data/bikeData';

function Home() {
  return (
    <>
      <div className='home-page-container'>
        <div className='carousel-container'>
          <CustomCarousel items={homePageCarouselData} />
        </div>

        <div className='action-btns'>
          <div className='act-btn'>
            <img src={EngineIcon} width='30' height='auto' className='me-3' />
            <span className='action-text'>Book a bike service</span>
          </div>
          <span className='vertical-separator'></span>
          <div className='act-btn'>
            <img src={MotorcycleIcon} width='30' height='auto' className='me-3' />
            <span className='action-text'>Book a test drive</span>
          </div>
        </div>

        <div className='book-service'>
          <h1 className='service-heading'>
            Book your Bike service slot in <span className='red-text'>three</span> simple steps
          </h1>
          <div className='service-steps'>
            <div className='bg-grey'>
              <img src={MobilePhone} alt='add-details' className='step-img mobile' />
            </div>
            <div className='bg-grey'>
              <img src={Calendar} alt='get-confirmation' className='step-img calendar' />
            </div>
            <div className='bg-grey'>
              <img src={Clock} alt='choose-slot' className='step-img clock' />
            </div>
          </div>
          <div className='steps-container'>
            <div className='steps-wrapper'>
              <span className='step-description'>Add your details</span>
              <img className='spanner' src={SpannerIcon} alt='spanner' />
              <span className='step-description'>Choose your slot</span>
              <img className='spanner' src={SpannerIcon} alt='spanner' />
              <span className='step-description'>Get your confirmation</span>
            </div>
            <div className='mt-3'>
              <button className='btn'>Book Now</button>
            </div>
          </div>
        </div>

        <div className='banners-container'>
          <div className='row'>
            <div className='col-7'>
              <img
                src={PulsarN150}
                alt='Pulsar N150'
                className='banner-imgs'
                width='750'
                height='auto'
              />
            </div>
            <div className='col-5'>
              <img
                src={Pulsar250}
                alt='Pulsar 220'
                className='banner-imgs'
                width='530'
                height='auto'
              />
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-4'>
              <img
                src={Avenger220}
                alt='Avenger 220'
                className='banner-imgs'
                width='420'
                height='auto'
              />
            </div>
            <div className='col-4'>
              <img
                src={Dominar400}
                alt='Dominar 400'
                className='banner-imgs'
                width='420'
                height='auto'
              />
            </div>
            <div className='col-4'>
              <img
                src={AdBanner}
                alt='republic day'
                className='banner-imgs'
                width='420'
                height='auto'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <BikeList bikes={bikeData} />
        </div>
      </div>
    </>
  );
}
export default Home;
