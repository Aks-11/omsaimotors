import { useNavigate } from 'react-router-dom';
import type { Bike } from '../schemas/bike';
import { customFormatNumber } from '../utils/utilities';

interface IProps {
  bike: Bike;
  testDriveBtn?: boolean;
}

function BikeView({ bike, testDriveBtn }: IProps) {
  const navigate = useNavigate();

  return (
    <>
      <div className='bike-detail' key={bike.id}>
        <div className='row'>
          <div className='col-7'>
            <div className='bike-name'>{bike.name}</div>
            {bike.sub_name && <div className='bike-sub-name'>{bike.sub_name}</div>}
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
                <h3 className='detail-value'>{bike.specifications.fuel_capacity} L</h3>
                <p className='detail-name'>Displacement</p>
                <h3 className='detail-value'>{bike.specifications.displacement} cc</h3>
              </div>
              <button
                className='btn mt-4'
                onClick={() => navigate(`/motorcycles/explore/${bike.key}`)}
              >
                Explore
              </button>
              {testDriveBtn && <button className='btn secondary-btn mt-2'>Book test drive</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BikeView;
