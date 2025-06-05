import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { bikeData } from '../../data/bikeData';
import type { Bike } from '../../schemas/bike';

function ExploreBike() {
  const { key } = useParams();
  const [bike, ] = useState(bikeData.find((b) => b.key === key) || null);
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
          <div className='prev-bike d-lg-inline d-none'>
            <NavLink to={`/motorcycles/explore/${prevBike?.key}`} className='prev-active'>
              Previous
            </NavLink>
            {prevBike && <span className='bike-name'>{prevBike.name}</span>}
          </div>
          <div className='heading'>
            <h1 className='current-bike'>
              <span className='big-text'>{bike?.name}</span>
              <br />
              <span className='small-text'>{bike?.sub_name}</span>
            </h1>
          </div>
          <div className='next-bike d-lg-inline d-none'>
            <NavLink to={`/motorcycles/explore/${nextBike?.key}`} className='bike-name'>
              Next
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
export default ExploreBike;
