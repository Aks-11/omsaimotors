import EngineIcon from '../assets/icons/engine.svg';
import MotorcycleIcon from '../assets/icons/motorcycle.svg';

interface IProps { 
  fixedBottomPosition?: boolean;
}

function BookingBanner({fixedBottomPosition}: IProps) {
  return (
    <>
      <div className={`booking-banner-container ${fixedBottomPosition ? 'fixed-position-bottom' : ''}`}>
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
    </>
  );
}
export default BookingBanner;
