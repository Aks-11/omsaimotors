import { NavLink } from 'react-router-dom';
import OmSaiMotorsLogo from '../assets/omsaimotors.svg';
import { useState } from 'react';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <nav className='navbar custom-navbar'>
        <div className='container'>
          <NavLink to='/home'>
            <img src={OmSaiMotorsLogo} alt='Om Sai Motors' />
          </NavLink>

          <div className='mobile-toggle' onClick={toggleMobileNav}>
            ☰
          </div>

          <div className='desktop-nav navbar-nav'>
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

        {/* Fullscreen Mobile Menu */}
        {isMobileNavOpen && (
          <div className='mobile-nav-overlay'>
            <div className='mobile-nav-header'>
              <NavLink to='/home'>
                <img src={OmSaiMotorsLogo} alt='Om Sai Motors' />
              </NavLink>
              <button className='close-btn' onClick={toggleMobileNav}>
                ×
              </button>
            </div>
            <div className='mobile-nav-links'>
              <NavLink to='/motorcycles' className='nav-link' onClick={toggleMobileNav}>
                Motorcycles
              </NavLink>
              <NavLink to='/service' className='nav-link' onClick={toggleMobileNav}>
                Service
              </NavLink>
              <NavLink to='/contact' className='nav-link' onClick={toggleMobileNav}>
                Contact Us
              </NavLink>
              <NavLink to='/about' className='nav-link' onClick={toggleMobileNav}>
                About Us
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default Header;
