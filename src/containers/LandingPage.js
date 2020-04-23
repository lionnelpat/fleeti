import React from 'react';
import TopNav from '../components/TopNav';
import Bande1 from '../components/Bande1';
import LogosPartners from '../components/LogosPartners';
import Economies from '../components/Economies';
import Bande2 from '../components/Bande2';
import MiniCardGroup from '../components/MiniCardGroup';
import Grille from '../components/Grille';
import Pricing from '../components/Pricing';
import Meet from '../components/Meet';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import Try from '../components/Try';

const LandingPage = () => {
    return (
        <>
            <TopNav />
            <Bande1 />
            <LogosPartners />
            <Economies />
            <Bande2 />
            <MiniCardGroup />
            <Grille />
            <Pricing />
            <Meet />
            <Blog />
            <Try/>
            <Footer />
        </>
    );
};

export default LandingPage;