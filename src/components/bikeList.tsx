import type { Bike } from '../schemas/bike';
import { customFormatNumber } from '../utils/utilities';

interface IProps {
  bikes: Bike[];
}

function BikeList({ bikes }: IProps) {
  return (
    <div className='bike-list-container'>
      {bikes.map((bike) => (
        <div className='bike-detail' key={bike.id}>
          <span className='bike-name'>{bike.name}</span>
          <div className='row'>
            <div className='col-7'>
              <div className='bike-img'>
                <img src={bike.image} alt={bike.name} width='100%' height='auto' />
              </div>
              <h3 className='bike-mob-name'>{bike.name}</h3>
            </div>
            <div className='col-5'>
              <div className='bike-specs'>
                <div className='detail-sheet'>
                  <p className='detail-name'>Starting from</p>
                  <h3 className='detail-value'>₹{customFormatNumber(bike.starting_price)}</h3>
                  <p className='detail-name'>Fuel Capacity</p>
                  <h3 className='detail-value'>{bike.fuel_capacity} L</h3>
                  <p className='detail-name'>Displacement</p>
                  <h3 className='detail-value'>{bike.displacement} cc</h3>
                </div>
                <button className='btn mt-4'>Explore</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default BikeList;
