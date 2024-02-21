import { combineReducers } from "redux";
import VehicleReducer from "./VehicleReducer";
import ErrorReducer from "./ErrorReducer";


//import the reducers that we have created
const rootReducer = combineReducers({
  // combine multiple reducers into a single root reducer
  vehicles: VehicleReducer,
  errors: ErrorReducer
});

export default rootReducer;