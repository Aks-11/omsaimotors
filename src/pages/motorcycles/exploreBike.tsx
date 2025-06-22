import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { bikeData } from '../../data/bikeData';
import type { Bike } from '../../schemas/bike';
import CustomCarousel from '../../components/customCarousel';
import { customFormatNumber } from '../../utils/utilities';
import Footer from '../../layouts/footer';

function ExploreBike() {
  const { key } = useParams();
  const [bike, setBike] = useState<Bike | null>(null);
  const [nextBike, setNextBike] = useState<Bike | null>(null);
  const [prevBike, setPrevBike] = useState<Bike | null>(null);

  useEffect(() => {
    setBike(bikeData.find((b) => b.key === key) || null);
  }, [key]);

  useEffect(() => {
    if (bike) {
      const next = bikeData.find((b) => b.id === bike.id + 1);
      const prev = bikeData.find((b) => b.id === bike.id - 1);
      next ? setNextBike(next) : setNextBike(null);
      prev ? setPrevBike(prev) : setPrevBike(null);
    }
  }, [bike]);

  return (
    <>
      <div className='explore-bike-container'>
        <div className='heading-section'>
          <div className='bike-nav'>
            {prevBike && (
              <NavLink to={`/motorcycles/explore/${prevBike.key}`} className='bike-nav-active'>
                Previous
              </NavLink>
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
            {nextBike && (
              <NavLink to={`/motorcycles/explore/${nextBike.key}`} className='bike-nav-active'>
                Next
              </NavLink>
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

        <div className='row justify-content-center gx-0'>
          <div className='col-md-10 col-12'>
            <div className='bike-specifications mt-5'>
              <h2 className='title'>Specifications</h2>
              <div className='specs-grid'>
                <div className='row'>
                  <div className='col-md-5 col-12 specs-column'>
                    <div className='spec-row'>
                      <div className='spec-label'>Displacement</div>
                      <div className='spec-value'>{bike?.specifications.displacement} cc</div>
                    </div>
                    <div className='spec-row'>
                      <div className='spec-label'>Max Power</div>
                      <div className='spec-value'>{bike?.specifications.max_power}</div>
                    </div>
                    <div className='spec-row'>
                      <div className='spec-label'>Max Torque</div>
                      <div className='spec-value'>{bike?.specifications.max_torque}</div>
                    </div>
                    <div className='spec-row'>
                      <div className='spec-label'>Mileage - ARAI</div>
                      <div className='spec-value'>{bike?.specifications.mileage} kmpl</div>
                    </div>
                    <div className='spec-row'>
                      <div className='spec-label'>Transmission</div>
                      <div className='spec-value'>{bike?.specifications.transmission}</div>
                    </div>
                    <div className='spec-row'>
                      <div className='spec-label'>Fuel Tank Capacity</div>
                      <div className='spec-value'>{bike?.specifications.fuel_capacity} litres</div>
                    </div>
                  </div>
                  <div className='col-md-2 col-12'></div>
                  <div className='col-md-5 col-12 specs-column'>
                    <div className='spec-row'>
                      <div className='spec-label'>Braking System</div>
                      <div className='spec-value'>{bike?.specifications.braking_system}</div>
                    </div>
                    <div className='spec-row'>
                      <div className='spec-label'>Front Brake Type</div>
                      <div className='spec-value'>{bike?.specifications.front_brake_type}</div>
                    </div>
                    <div className='spec-row'>
                      <div className='spec-label'>Rear Brake Type</div>
                      <div className='spec-value'>{bike?.specifications.rear_brake_type}</div>
                    </div>
                    <div className='spec-row'>
                      <div className='spec-label'>Kerb Weight</div>
                      <div className='spec-value'>{bike?.specifications.kerb_weight} kg</div>
                    </div>
                    <div className='spec-row'>
                      <div className='spec-label'>Seat Height</div>
                      <div className='spec-value'>{bike?.specifications.seat_height} mm</div>
                    </div>
                    <div className='spec-row'>
                      <div className='spec-label'>Ground Clearance</div>
                      <div className='spec-value'>{bike?.specifications.ground_clearance} mm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ExploreBike;
