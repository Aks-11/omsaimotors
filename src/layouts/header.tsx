import { NavLink } from 'react-router-dom';
import OmSaiMotorsLogo from '../assets/omsaimotors.svg';
import { useEffect, useState } from 'react';
import { bikeData, parentBikeModelData } from '../data/bikeData';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMotorcyclesSubMenuOpen, setIsMotorcyclesSubMenuOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const toggleMotorcyclesSubMenu = () => {
    setIsMotorcyclesSubMenuOpen(!isMotorcyclesSubMenuOpen);
  };

  useEffect(() => {
    if (!isMobileNavOpen) {
      setIsMotorcyclesSubMenuOpen(false);
    }
  }, [isMobileNavOpen]);

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
            <div>
              {isMotorcyclesSubMenuOpen ? (
                <div className='motorcycle-sub-menu'>
                  <div className='title'>MOTORCYCLES</div>
                  {parentBikeModelData.map((parentModel, index) => (
                    <div key={index}>
                      <NavLink
                        to={`/motorcycles/explore/${bikeData.find((bike) => bike.key.includes(parentModel.toLowerCase()))?.key ?? ''}`}
                        className='nav-link'
                        onClick={toggleMobileNav}
                      >
                        {parentModel}
                      </NavLink>
                    </div>
                  ))}
                </div>
              ) : (
                <div className='mobile-nav-links'>
                  <div className='nav-link' onClick={toggleMotorcyclesSubMenu}>
                    Motorcycles
                  </div>
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
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default Header;
