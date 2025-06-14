import ServieImage from '../../assets/service/service.png';
import TestRideImage from '../../assets/service/test-ride.png';
import BookingBanner from '../../components/bookingBanner';

function ServicePage() {
  return (
    <>
      <div className='service-page-container'>
        <div className='main-wrapper'>
          <div className='book-drive-service'>
            <a className='action' id='book-ride-action'>
              <img src={TestRideImage} alt='' width='500px' height='auto' />
              <p className='action-text'>Book a Test Ride</p>
            </a>
          </div>
          <div className='book-drive-service'>
            <a
              data-bs-toggle='modal'
              className='action'
              id='book-service-action'
            >
              <img src={ServieImage} alt='' width='500px' height='auto' />
              <p className='action-text'>Book your Bike Service</p>
            </a>
          </div>
        </div>
      </div>
      <div className='row gx-0'>
        <BookingBanner fixedBottomPosition />
      </div>
    </>
  );
}
export default ServicePage;
