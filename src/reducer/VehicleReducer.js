import { GET_VEHICLES, SELL_VEHICLE, CREATE_VEHICLE} from "../actions/types";

const initialState = {
    vehicles: [] ,
};

export default function VehicleReducer(state = initialState, action) {
    switch(action.type) {
        case GET_VEHICLES:
            
            return {
                ...state,
                vehicles: action.payload
            };

            case CREATE_VEHICLE:
            
            return {
                ...state,
                vehicles: [...state.vehicles, action.payload]

            }
        case SELL_VEHICLE:
            
            return {
                ...state,
                vehicles: state.vehicles.filter(vehicle => vehicle.id !== action.payload)
            };
        default:
            
            return state;
    }
}
