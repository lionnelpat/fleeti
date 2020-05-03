import React, { useEffect } from 'react';
import Bande1 from '../components/Bande1';
import LogosPartners from '../components/LogosPartners';
import Economies from '../components/Economies';
import Bande2 from '../components/Bande2';
import MiniCardGroup from '../components/MiniCardGroup';
import Grille from '../components/Grille';
import Pricing from '../components/Pricing';
import Meet from '../components/Meet';
import Blog from '../components/Blog';

const LandingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return (
        <>
            <Bande1 />
            <LogosPartners />
            <Economies />
            <Bande2 />
            <MiniCardGroup />
            <Grille />
            <Pricing />
            <Meet />
            {/* <Blog /> */}
           
        </>
    );
};

export default LandingPage;