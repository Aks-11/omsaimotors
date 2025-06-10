import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { bikeData } from '../../data/bikeData';
import type { Bike } from '../../schemas/bike';
import CustomCarousel from '../../components/customCarousel';
import { customFormatNumber } from '../../utils/utilities';

function ExploreBike() {
  const { key } = useParams();
  const [bike] = useState(bikeData.find((b) => b.key === key) || null);
  const [nextBike, setNextBike] = useState<Bike>();
  const [prevBike, setPrevBike] = useState<Bike>();

  useEffect(() => {
    if (bike) {
      const next = bikeData.find((b) => b.id === bike.id + 1);
      const prev = bikeData.find((b) => b.id === bike.id - 1);
      if (next) {
        setNextBike(next);
      }
      if (prev) {
        setPrevBike(prev);
      }
    }
  }, [bike]);

  return (
    <>
      <div className='explore-bike-container'>
        <div className='heading-section'>
          <div className='bike-nav'>
            {prevBike ? (
              <NavLink to={`/motorcycles/explore/${prevBike.key}`} className='bike-nav-active'>
                Previous
              </NavLink>
            ) : (
              <span className='bike-nav-disabled'>Previous</span>
            )}
            {prevBike && <span className='bike-name'>{prevBike.name}</span>}
          </div>
          <div className='heading'>
            <h1 className='current-bike'>
              <span className='big-text'>{bike?.name}</span>
              <br />
              <span className='small-text'>{bike?.sub_name}</span>
            </h1>
          </div>
          <div className='bike-nav'>
            {nextBike ? (
              <NavLink to={`/motorcycles/explore/${nextBike.key}`} className='bike-nav-active'>
                Next
              </NavLink>
            ) : (
              <span className='bike-nav-disabled'>Next</span>
            )}
            {nextBike && <span className='bike-name'>{nextBike.name}</span>}
          </div>
        </div>
        <div className='bike-carousel-container'>
          {bike && <CustomCarousel items={bike?.carousel_images} />}
        </div>
        {bike && (
          <div className='price-and-enquiry'>
            <div className='row'>
              <div className='col-6'>
                <div className='showroom-price'>
                  <span className='title'>Ex-showroom Price</span>
                  <span className='price'>₹ {customFormatNumber(bike.starting_price)}</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='btn-container'>
                  <button className='btn'>Enquiry</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default ExploreBike;
