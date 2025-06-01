import { useState } from 'react';
import { bikeData, parentBikeModelData } from '../../data/bikeData';

function MotorcyclesListing() {
  const [selectedParentBike, setSelectedParentBike] = useState<string>(parentBikeModelData[0]);

  return (
    <>
      <div className='motorcycles-listing-container container-fluid'>
        <div className='row'>
          {/* Left nav for parent bike models */}
          <div className='col-2'>
            <div className='row'>
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
          <div className='col-2'>
            <div className='row'>
              {bikeData
                .filter((bike) => bike.name.startsWith(selectedParentBike))
                .map((bike) => (
                  <div className='col-12 bike-model' key={bike.id}>
                    <span>{bike.name}</span>
                  </div>
                ))}
            </div>
          </div>
          <div className='col-8'></div>
        </div>
      </div>
    </>
  );
}
export default MotorcyclesListing;
