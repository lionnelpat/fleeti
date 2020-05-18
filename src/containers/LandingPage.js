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
import { Icon, Responsive } from 'semantic-ui-react';

const LandingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const arrow = useRef(null)
    return (
        <>
            <Bande1 />
            <Responsive minWidth={1024}>
                <p style={{ textAlign: "center" }}>
                    <Icon name="angle down" style={{ fontSize: 50, color: "#757575", cursor: "pointer" }} onClick={() => arrow.current.scrollIntoView({ behavior: 'smooth' })} />

                </p>
                <div ref={arrow}>
                    <LogosPartners />
                </div>
            </Responsive>
            <Economies />
            <Responsive maxWidth={1024.9999}>

                <LogosPartners />
            </Responsive>
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