import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Vehicle from './Vehicles/Vehicle';
import { getVehicles } from '../actions/VehicleActions';

function VehicleShop() {
  const dispatch = useDispatch();
  const vehicles = useSelector(state => state.vehicles.vehicles || []);
  const [manufacturerFilter, setManufacturerFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  useEffect(() => {
    dispatch(getVehicles());
  }, [dispatch]);

  function handleManufacturerChange(e) {
    setManufacturerFilter(e.target.value);
  }

  function handlePriceChange(e) {
    setPriceFilter(e.target.value);
  }

  function filteredVehicles() {
    return vehicles.filter(vehicle => {
      const matchesManufacturer = manufacturerFilter === '' || vehicle.manufacturer.toLowerCase().startsWith(manufacturerFilter.toLowerCase());
      const matchesPrice = priceFilter === '' || vehicle.price === (priceFilter);
      return matchesManufacturer && matchesPrice;
    });
  }
  


  return (
    <div className="container">
      <div className="m-auto row">
        <div className="container mb-2">
          <Link to="/AddVehicleForm" className="btn btn-primary">Create a Vehicle</Link>
        </div>
        <hr />
        <div className="col-md-4 mb-2">
          <div className="input-group">
            <span className="input-group-text" id="manufacturer-addon">Manufacturer</span>
            <input
              type="text"
              className="form-control"
              placeholder="Filter by Manufacturer"
              value={manufacturerFilter}
              onChange={handleManufacturerChange}
            />
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="input-group">
            <span className="input-group-text">Price</span>
            <input
              type="text"
              className="form-control"
              placeholder="Filter by Price"
              value={priceFilter}
              onChange={handlePriceChange}
            />
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        {filteredVehicles().map(vehicle => (
          <Vehicle key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}

export default VehicleShop;
