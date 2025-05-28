import { NavLink } from 'react-router-dom';
import OmSaiMotorsLogo from '../assets/omsaimotors.svg';

const Header = () => {
  return (
    <>
      <nav className='navbar custom-navbar'>
        <div className='container'>
          <NavLink to='/home'>
            <img src={OmSaiMotorsLogo} alt='Om Sai Motors' />
          </NavLink>
          <div className='navbar-nav'>
            <NavLink to='/motorcycles' className='nav-link'>
              Motorcycles
            </NavLink>
            <NavLink to='/service' className='nav-link'>
              Service
            </NavLink>
            <NavLink to='/contact' className='nav-link'>
              Contact Us
            </NavLink>
            <NavLink to='/about' className='nav-link'>
              About Us
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
