import Footer from '../../layouts/footer';
import HeroImage from '../../assets/aboutUsPage/hero-image.png';
import Gallery1 from '../../assets/aboutUsPage/gallery-1.png';
import Gallery2 from '../../assets/aboutUsPage/gallery-2.png';
import Gallery3 from '../../assets/aboutUsPage/gallery-3.png';
import Gallery4 from '../../assets/aboutUsPage/gallery-4.png';
import Gallery5 from '../../assets/aboutUsPage/gallery-5.jpg';
import { useState } from 'react';
import BookServiceModal from '../../components/bookServiceModal';
import { customerReviews, miscData } from '../../data';
import CustomerReviews from '../../components/customerReviews';

function AboutUsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className='about-us-page-container'>
        <div className='padded-section'>
          <div className='page-heading'>ABOUT US</div>
          <div className='sub-heading'>
            <span>Dedicated Teams, </span>
            <span>for your best bike service.</span>
          </div>
          <div className='hero-image-wrapper mt-4'>
            <img src={HeroImage} className='hero-image' alt='Hero' />
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-lg-10 col-md-10 col-sm-12 col-12'>
              <div className='description-text'>{miscData.aboutUsText}</div>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-lg-8 col-md-8 col-sm-12 col-12'>
              <div className='service-container'>
                <div className='text-center'>
                  <span className='service-text'>Book your Bike service slot in just</span>
                  <span className='highlight-text'>&nbsp;three&nbsp;</span>
                  <span className='service-text'>simple steps</span>
                </div>
                <div className='d-flex justify-content-center w-100'>
                  <button className='btn mt-3 w-75' onClick={() => setIsModalOpen(true)}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='image-gallery mt-5'>
            <div className='row g-3'>
              <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                <img src={Gallery1} className='img-fluid equal-img' alt='' />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                <img src={Gallery2} className='img-fluid equal-img' alt='' />
              </div>
              <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                <img src={Gallery3} className='img-fluid equal-img' alt='' />
              </div>
              <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                <img src={Gallery4} className='img-fluid equal-img' alt='' />
              </div>
              <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                <img src={Gallery5} className='img-fluid equal-img' alt='' />
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <CustomerReviews customerReviews={customerReviews} />
          </div>
        </div>
        <div className='mt-5'>
          <Footer />
        </div>
      </div>
      {isModalOpen && (
        <BookServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
export default AboutUsPage;
