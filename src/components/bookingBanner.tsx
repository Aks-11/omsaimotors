import { useState } from 'react';
import EngineIcon from '../assets/icons/engine.svg';
import MotorcycleIcon from '../assets/icons/motorcycle.svg';
import BikeEnquiryModal from './bikeEnquiryModal';
import BookServiceModal from './bookServiceModal';

function BookingBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  return (
    <>
      <div className={`booking-banner-container`}>
        <div className='act-btn'>
          <img src={EngineIcon} width='30' height='auto' className='me-3' />
          <span className='action-text' onClick={() => setIsServiceModalOpen(true)}>
            Book a bike service
          </span>
        </div>
        <span className='vertical-separator'></span>
        <div className='act-btn'>
          <img src={MotorcycleIcon} width='30' height='auto' className='me-3' />
          <span className='action-text' onClick={() => setIsModalOpen(true)}>
            Enquiry
          </span>
        </div>
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
export default BookingBanner;
