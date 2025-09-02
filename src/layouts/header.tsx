import { NavLink } from 'react-router-dom';
import OmSaiMotorsLogo from '../assets/omsaimotors.svg';
import { useEffect, useState } from 'react';
import { bikeData, parentBikeModelData } from '../data/bikeData';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMotorcyclesSubMenuOpen, setIsMotorcyclesSubMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              <NavLink
                to='/home'
                onClick={() => {
                  toggleAccordion(null);
                  toggleMobileNav();
                }}
              >
                <img src={OmSaiMotorsLogo} alt='Om Sai Motors' />
              </NavLink>
              <button
                className='close-btn'
                onClick={() => {
                  toggleAccordion(null);
                  toggleMobileNav();
                }}
              >
                ×
              </button>
            </div>
            <div>
              {isMotorcyclesSubMenuOpen ? (
                <>
                  <div className='title'>MOTORCYCLES</div>
                  <div className='motorcycle-sub-menu'>
                    <hr />
                    {parentBikeModelData.map((parentModel, index) => {
                      const subModels = bikeData.filter((bike) =>
                        bike.key.includes(parentModel.toLowerCase()),
                      );
                      if (subModels.length > 1) {
                        return (
                          <>
                            <div className='nav-link' onClick={() => toggleAccordion(index)}>
                              {parentModel}{' '}
                              <i
                                className={`bi bi-chevron-${openIndex === index ? 'up' : 'down'}`}
                              ></i>
                            </div>
                            {openIndex === index && (
                              <div className='ms-3 d-flex flex-column gap-2'>
                                {subModels.map((sub, idx) => (
                                  <NavLink
                                    key={idx}
                                    to={`/motorcycles/explore/${sub.key}`}
                                    className='nav-link'
                                    onClick={() => {
                                      toggleAccordion(null);
                                      toggleMobileNav();
                                    }}
                                  >
                                    - {sub.name}
                                  </NavLink>
                                ))}
                              </div>
                            )}
                          </>
                        );
                      } else {
                        return (
                          <div key={index}>
                            <NavLink
                              to={`/motorcycles/explore/${bikeData.find((bike) => bike.key.includes(parentModel.toLowerCase()))?.key ?? ''}`}
                              className='nav-link'
                              onClick={toggleMobileNav}
                            >
                              {parentModel}
                            </NavLink>
                          </div>
                        );
                      }
                    })}
                  </div>
                </>
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
