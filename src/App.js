import React from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Bande1 from './components/Bande1';
import LogosPartners from './components/LogosPartners';
import Economies from './components/Economies';
import Bande2 from './components/Bande2';
import MiniCardGroup from './components/MiniCardGroup';

function App() {
  return (
    <div>
      <TopNav/>
      <Bande1/>
      <LogosPartners/>
      <Economies/>
      <Bande2/>
      <MiniCardGroup/>
    </div>
  );
}

export default App;
