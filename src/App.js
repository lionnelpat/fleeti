import React from 'react';
import './App.css';
import LandingPage from './containers/LandingPage';
import CostTracking from './containers/CostTracking';
import TopNav from './components/TopNav';
import Geolocalisation from './containers/Geolocalisation';
import FuelManagement from './containers/FuelManagement';
import {BrowserRouter,Switch,Route} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route path="/cost-tracking" component={CostTracking} />
        <Route path="/geolocalisation" component={Geolocalisation} />
        <Route path="/fuel-management" component={FuelManagement} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    
    </BrowserRouter>

    </>
  );
}

export default App;
