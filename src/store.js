import { legacy_createStore as createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const initialState = {};
const middleWare = thunk;

let store;
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMOPSE__ || compose;

store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(middleWare)));

export default store;