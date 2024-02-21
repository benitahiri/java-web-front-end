import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createVehicle } from "../../actions/VehicleActions";

function AddVehicle() {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.errors);

  const [vehicle, setVehicle] = useState({
    manufacturer: "",
    model: "",
    price: "",
    vehicleColor: "",
    mileage: "",
    productionYearOfTheVehicle: "",
    transmission: "",
    fuelType: "",
    horsepower: ""
  });

  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    setVehicle(v => ({ ...v, errors }));
  }, [errors]);

  const onChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
    setValidationErrors({ ...validationErrors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let formErrors = {};
    Object.keys(vehicle).forEach(key => {
      if (!vehicle[key]) {
        formErrors[key] = "This field is required";
      }
    });
    return formErrors;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setValidationErrors(formErrors);
      return;
    }

    dispatch(createVehicle(vehicle));
  };

  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h3 className="text-center">Create Vehicle Form</h3>
            <hr />
            <form onSubmit={onSubmit}>
              {/* Manufacturer Input */}
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control form-control-lg ${validationErrors.manufacturer ? 'is-invalid' : ''}`}
                  placeholder="Vehicle Manufacturer"
                  name="manufacturer"
                  value={vehicle.manufacturer}
                  onChange={onChange}
                />
                {validationErrors.manufacturer && <div className="invalid-feedback">{validationErrors.manufacturer}</div>}
              </div>

              {/* Model Input */}
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control form-control-lg ${validationErrors.model ? 'is-invalid' : ''}`}
                  placeholder="Model"
                  name="model"
                  value={vehicle.model}
                  onChange={onChange}
                />
                {validationErrors.model && <div className="invalid-feedback">{validationErrors.model}</div>}
              </div>

               {/* Price Input */}
               <div className="form-group">
                <input
                  type="number"
                  className={`form-control form-control-lg ${validationErrors.price ? 'is-invalid' : ''}`}
                  placeholder="Price"
                  name="price"
                  value={vehicle.price}
                  onChange={onChange}
                />
                {validationErrors.price && <div className="invalid-feedback">{validationErrors.price}</div>}
              </div>

              {/* Horsepower Input */}
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control form-control-lg ${validationErrors.horsepower ? 'is-invalid' : ''}`}
                  placeholder="Horsepower"
                  name="horsepower"
                  value={vehicle.horsepower}
                  onChange={onChange}
                />
                {validationErrors.horsepower && <div className="invalid-feedback">{validationErrors.horsepower}</div>}
              </div>

              {/* Vehicle Color Input */}
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control form-control-lg ${validationErrors.vehicleColor ? 'is-invalid' : ''}`}
                  placeholder="Vehicle Color"
                  name="vehicleColor"
                  value={vehicle.vehicleColor}
                  onChange={onChange}
                />
                {validationErrors.vehicleColor && <div className="invalid-feedback">{validationErrors.vehicleColor}</div>}
              </div>

              {/* Mileage Input */}
              <div className="form-group">
                <input
                  type="number"
                  className={`form-control form-control-lg ${validationErrors.mileage ? 'is-invalid' : ''}`}
                  placeholder="Mileage"
                  name="mileage"
                  value={vehicle.mileage}
                  onChange={onChange}
                />
                {validationErrors.mileage && <div className="invalid-feedback">{validationErrors.mileage}</div>}
              </div>

              {/* Production Year Input */}
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control form-control-lg ${validationErrors.productionYearOfTheVehicle ? 'is-invalid' : ''}`}
                  placeholder="Production Year of the Vehicle"
                  name="productionYearOfTheVehicle"
                  value={vehicle.productionYearOfTheVehicle}
                  onChange={onChange}
                />
                {validationErrors.productionYearOfTheVehicle && <div className="invalid-feedback">{validationErrors.productionYearOfTheVehicle}</div>}
              </div>

              {/* Transmission Input */}
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control form-control-lg ${validationErrors.transmission ? 'is-invalid' : ''}`}
                  placeholder="Transmission"
                  name="transmission"
                  value={vehicle.transmission}
                  onChange={onChange}
                />
                {validationErrors.transmission && <div className="invalid-feedback">{validationErrors.transmission}</div>}
              </div>

              {/* Fuel Type Input */}
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control form-control-lg ${validationErrors.fuelType ? 'is-invalid' : ''}`}
                  placeholder="Fuel Type"
                  name="fuelType"
                  value={vehicle.fuelType}
                  onChange={onChange}
                />
                {validationErrors.fuelType && <div className="invalid-feedback">{validationErrors.fuelType}</div>}
              </div>

             

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddVehicle;
