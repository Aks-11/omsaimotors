import { useEffect, useState } from 'react';
import { bikeData, parentBikeModelData } from '../../data/bikeData';
import type { Bike } from '../../schemas/bike';
import BookingBanner from '../../components/bookingBanner';
import BikeView from '../../components/bikeView';

function MotorcyclesListing() {
  const [selectedParentBike, setSelectedParentBike] = useState<string>(parentBikeModelData[0]);
  const [selectedBike, setSelectedBike] = useState<Bike>();

  useEffect(() => {
    const initialBike = bikeData.find((bike) => bike.name.startsWith(selectedParentBike));
    if (initialBike) {
      setSelectedBike(initialBike);
    }
  }, [selectedParentBike]);

  return (
    <>
      <div className='motorcycles-listing-container'>
        <div className='row gx-0'>
          {/* Left nav for parent bike models */}
          <div className='col-2 parent-bike-list-nav'>
            <div className='row gx-0'>
              {parentBikeModelData.map((modelName, index) => (
                <div
                  className={`col-12 parent-bike-model ${selectedParentBike === modelName ? 'active' : ''}`}
                  key={index}
                  onClick={() => setSelectedParentBike(modelName)}
                >
                  <span>{modelName}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sub nav for specific bike models */}
          <div className='col-2 bike-model-list-nav'>
            <div className='row gx-0'>
              {bikeData
                .filter((bike) => bike.name.startsWith(selectedParentBike))
                .map((bike) => (
                  <div
                    className={`col-12 bike-model ${selectedBike?.id === bike.id ? 'active' : ''}`}
                    key={bike.id}
                    onClick={() => setSelectedBike(bike)}
                  >
                    <div>
                      <div className='text-center'>{bike.name}</div>
                      {bike.sub_name && (
                        <div className='text-center description'>{bike.sub_name}</div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Main content area for bike details */}
          <div className='col-8 px-5'>
            {selectedBike && <BikeView bike={selectedBike} testDriveBtn />}
          </div>
        </div>

        <BookingBanner />
      </div>
    </>
  );
}
export default MotorcyclesListing;
