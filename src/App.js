// Import necessary dependencies
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AddVehicle from './components/Vehicles/AddVehicle';
import VehicleShop from './components/VehicleShop';



// Define the main App component
function App() {
  
  // Use the Redux store provider to make the store available to nested components
      
      return (
        <Provider store={store}>
          <Router>
            <div>
              <Header />
              <Routes>
              <Route exact path='/' element={<VehicleShop />}></Route>
              <Route exact path='/AddVehicleForm' element={<AddVehicle />}></Route>
              
          
             </Routes>
            </div>
          </Router>
        </Provider>
      );
    
}

// Export the App component to be used in other parts of the application
export default App;
