import React from 'react';
import { useDispatch } from 'react-redux';
import { sellVehicle } from '../../actions/VehicleActions';

function Vehicle({ vehicle }) {
  const dispatch = useDispatch();

  const onSellClick = (id) => {
  
    dispatch(sellVehicle(id));
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-lg-9">
              {}
              <h5>Vehicle id: {vehicle.id}</h5>
              <p>Vehicle Manufacturer: {vehicle.manufacturer}</p>
              <p>Vehicle Model: {vehicle.model}</p>
              <p>Vehicle Price: {vehicle.price}</p>
              <p>Vehicle horse power: {vehicle.horsepower}</p>
              <p>Vehicle Color: {vehicle.vehicleColor}</p>
              <p>Vehicle Mileage: {vehicle.mileage}</p>
              <p>Vehiicle production year: {vehicle.productionYear}</p>
              <p>Vehicle transmission: {vehicle.transmission}</p>
              <p>Vehicle fuel Type: {vehicle.fuelType}</p>
            </div>
            <div className="col-md-3">
             
              <button onClick={() => onSellClick(vehicle.id)} className="btn btn-danger">
                Sell Vehicle
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Vehicle;
