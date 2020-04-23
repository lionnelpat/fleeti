import React from 'react';
import './App.css';
import LandingPage from './containers/LandingPage';
import CostTracking from './containers/CostTracking';
import TopNav from './components/TopNav';
import Geolocalisation from './containers/Geolocalisation';
import FuelManagement from './containers/FuelManagement';


function App() {
  return (
    <>
      <TopNav />
      {/* <CostTracking/> */}
      {/* <LandingPage/> */}
      {/* <Geolocalisation/> */}
      <FuelManagement/>
    </>
  );
}

export default App;
