import React, { useState } from 'react';
import './App.css';
import LandingPage from './containers/LandingPage';
import CostTracking from './containers/CostTracking';
import TopNav from './components/TopNav';
import Geolocalisation from './containers/Geolocalisation';
import FuelManagement from './containers/FuelManagement';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Alertes from './containers/Alertes';
import ComparaisonDePrestaires from './containers/ComparaisonDePrestaires';
import Footer from './components/Footer';
import Try from './components/Try';
import DemoGratuite from './containers/DemoGratuite';
import PlanningEtMissions from './containers/PlanningEtMissions';
import Partnership from './containers/Partnership';
import SecondNav from './components/SecondNav';
import { Sidebar, Responsive } from 'semantic-ui-react';


function App() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <BrowserRouter>
        <TopNav visible={visible} setVisible={setVisible} />
        <SecondNav visib={visible}>
          <Sidebar.Pusher>
            <Switch>
              <Route path="/cost-tracking" component={CostTracking} />
              <Route path="/geolocalisation" component={Geolocalisation} />
              <Route path="/fuel-management" component={FuelManagement} />
              <Route path="/alertes" component={Alertes} />
              <Route path="/comparaison-de-prestaires" component={ComparaisonDePrestaires} />
              <Route path="/demo-gratuite" component={DemoGratuite} />
              <Route path="/planning-et-missions" component={PlanningEtMissions} />
              <Route exact path="/partnership" component={Partnership} />
              <Route exact path="/" component={LandingPage} />
            </Switch>
            <Responsive minWidth={1024}>
              <Try />
            </Responsive>
            <Footer />
          </Sidebar.Pusher>
        </SecondNav>
      </BrowserRouter>

    </>
  );
}

export default App;
