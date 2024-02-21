import { GET_ERRORS } from "../actions/types";
const initialState = {};


export default function ErrorReducer(state = initialState, action) {
      // Update the state with the error payload
      switch(action.type) { 
            case GET_ERRORS:
                return action.payload;
               
                 default:
                    return state;
        }
}