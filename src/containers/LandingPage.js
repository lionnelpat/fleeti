import React, { useEffect, useRef } from 'react';
import Bande1 from '../components/Bande1';
import LogosPartners from '../components/LogosPartners';
import Economies from '../components/Economies';
import Bande2 from '../components/Bande2';
import MiniCardGroup from '../components/MiniCardGroup';
import Grille from '../components/Grille';
import Pricing from '../components/Pricing';
import Meet from '../components/Meet';
// import Blog from '../components/Blog';
import { Icon } from 'semantic-ui-react';

const LandingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const logos = useRef(null)
    return (
        <>
            <Bande1 />
            <p style={{ textAlign: "center" }}>
                <Icon name="chevron down" style={{ fontSize: 35, color: "rgba(0, 0, 0, 0.54)", cursor: "pointer", marginTop: 30 }} onClick={() => logos.current.scrollIntoView({ behavior: 'smooth' })} />

            </p>
            <div ref={logos}>
                <LogosPartners />
            </div>
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