import MapIcon from '../assets/icons/map-pin.svg';
import WhatsappIcon from '../assets/icons/whatsapp.svg';
import FacebookIcon from '../assets/icons/facebook.svg';
import InstagramIcon from '../assets/icons/instagram.svg';

function Footer() {
  return (
    <div className='main-footer-container'>
      <div className='row footer-row'>
        <div className='col-6 col-lg-2 footer-col'>
          <h5 className='col-heading'>Motorcycles</h5>
          <ul className='footer-links'>
            <li>
              <a href='bikeslist.html' className='foot-link'>
                Pulsar
              </a>
            </li>
            <li>
              <a href='bikeslist.html' className='foot-link'>
                Dominar
              </a>
            </li>
            <li>
              <a href='bikeslist.html' className='foot-link'>
                Avenger
              </a>
            </li>
            <li>
              <a href='bikeslist.html' className='foot-link'>
                Platina
              </a>
            </li>
            <li>
              <a href='bikeslist.html' className='foot-link'>
                CT
              </a>
            </li>
          </ul>
        </div>
        <div className='col-6 col-lg-2 footer-col'>
          <h5 className='col-heading'>Customer Service</h5>
          <ul className='footer-links'>
            <li>
              <a href='#book-service-modal' data-bs-toggle='modal' className='foot-link'>
                Book a Service
              </a>
            </li>
          </ul>
        </div>
        <div className='col-12 col-lg-2 footer-col'>
          <h5 className='col-heading'>Contact Us</h5>
          <ul className='footer-links'>
            <li>
              <p className='foot-link'>
                Plot No. 22, 31, opp. Modern School, Noida Extension, Shahberi, Noida, Ghaziabad,
                Uttar Pradesh 201301
              </p>
            </li>
            <li>
              <p className='foot-link'>+91 83683 20977</p>
            </li>
            <li className='location'>
              <a className='foot-link' href='contactus.html'>
                <img src={MapIcon} alt='location' height='18px' width='auto' />
                <span className='ms-2'>Our Location</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='col-12 col-lg-5 offset-lg-1'>
          <div className='about-us'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus earum in alias
              placeat quis, commodi reiciendis? Fugiat, maiores. Rerum, velit. Suscipit ratione
              nesciunt vel rerum atque vitae. Praesentium, mollitia.
            </p>
            <a href='aboutus.html' id='about-us-btn'>
              View More
            </a>
          </div>
        </div>
      </div>
      <div className='social-links'>
        <div className='row social-row'>
          <div className='col-6 col-lg-2 copyright'>
            <span>&copy;</span> 2024, Om sai motors
          </div>
          <div className='col-6 col-lg-2 social-media'>
            <a href='' className='social-icon'>
              <img src={WhatsappIcon} alt='whatsapp' width='20' height='auto' />
            </a>
            <a href='' className='social-icon'>
              <img src={FacebookIcon} alt='facebook' width='20' height='auto' />
            </a>
            <a href='' className='social-icon'>
              <img src={InstagramIcon} alt='instagram' width='20' height='auto' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
