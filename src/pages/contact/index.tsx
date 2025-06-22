import BookingBanner from '../../components/bookingBanner';
import MapPinIcon from '../../assets/icons/map-pin.svg';
import PhoneIcon from '../../assets/icons/call-icon.svg';
import MailIcon from '../../assets/icons/mail.svg';

function ContactUsPage() {
  return (
    <>
      <div className='contact-us-page-container'>
        <div className='main-wrapper'>
          <div className='info-container'>
            <div className='info-card-container'>
              <div className='info-card'>
                <div className='card-heading mb-2'>
                  <img src={MapPinIcon} alt='' width='20px' height='auto' className='me-3' />
                  <span>Address</span>
                </div>
                <p className='deets'>
                  Main Road Saveri, Plot No. 22/31, opp. Modern School, Extension, Shahberi, Noida,
                  Ghaziabad, Uttar Pradesh 201301
                </p>
              </div>
            </div>
            <div className='info-card-container'>
              <div className='info-card'>
                <div className='card-heading mb-2'>
                  <img src={PhoneIcon} alt='' width='20px' height='auto' className='me-3' />
                  <span>Contact us</span>
                </div>
                <p className='deets'>
                  <a href='tel:+918368320977'>+91 8368320977</a>
                </p>
              </div>
            </div>
            <div className='info-card-container'>
              <div className='info-card'>
                <div className='card-heading mb-2'>
                  <img src={MailIcon} alt='' width='20px' height='auto' className='me-3' />
                  <span>Email</span>
                </div>
                <p className='deets'>
                  <a href='mailto:omsaimotors@gmail.com'>omsaimotors@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className='map-container'>
            <div className='find-us-text'>Click on the map to find us</div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d842.5162079705392!2d77.43659898469436!3d28.618642088434918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef3515150b6b%3A0xff0ba0ef4777a57c!2sOM%20SAI%20BAJAJ%20-%20Bajaj%20Authorised%20Dealer%20%26%20Service%20Center!5e0!3m2!1sen!2sin!4v1750354700646!5m2!1sen!2sin'
              allowFullScreen={false}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>
        <BookingBanner />
      </div>
    </>
  );
}
export default ContactUsPage;
