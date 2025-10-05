import { useState } from 'react';
import ServieImage from '../../assets/service/service.png';
import TestRideImage from '../../assets/service/test-ride.png';
import BikeEnquiryModal from '../../components/bikeEnquiryModal';
import BookingBanner from '../../components/bookingBanner';
import BookServiceModal from '../../components/bookServiceModal';

function ServicePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  return (
    <>
      <div className='service-page-container'>
        <div className='page-heading'>
          <span>SERVICE</span>
        </div>
        <div className='main-wrapper'>
          <div className='book-drive-service'>
            <a className='action' id='book-ride-action' onClick={() => setIsModalOpen(true)}>
              <img src={TestRideImage} alt='Enquiry' className='responsive-img' />
              <p className='action-text'>Enquiry</p>
            </a>
          </div>
          <div className='book-drive-service'>
            <a
              data-bs-toggle='modal'
              className='action'
              id='book-service-action'
              onClick={() => setIsServiceModalOpen(true)}
            >
              <img src={ServieImage} alt='Bike Service' className='responsive-img' />
              <p className='action-text'>Book your Bike Service</p>
            </a>
          </div>
        </div>
        <BookingBanner />
      </div>
      {isModalOpen && (
        <BikeEnquiryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          bikeDetails={null}
        />
      )}
      {isServiceModalOpen && (
        <BookServiceModal
          isOpen={isServiceModalOpen}
          onClose={() => setIsServiceModalOpen(false)}
        />
      )}
    </>
  );
}
export default ServicePage;
