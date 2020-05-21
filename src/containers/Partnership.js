import React, { useEffect, useRef } from 'react';
import PartnerHeader from '../components/PartnerHeader';
import PartnerCardGroup from '../components/PartnerCardGroup'
import { Icon, Responsive, Button } from 'semantic-ui-react';
import { partnerships } from "../variables/Partnerships.js"
import { Link } from 'react-router-dom';

const Partnership = () => {
    return (
        <>
            <PartnerHeader />
            <p style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', fontFamily: 'Muli', color: '#000000' }}>3 façons de collaborer ensemble</p>
            <PartnerCardGroup data={partnerships} />
            <Responsive maxWidth={1024}>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
                <div style={{ fontSize: 24, fontWeight: "bold", color: "#FFAC26", fontFamily: 'Muli', marginBottom: 20 }}>Prêt à vous lancer ?</div>
                <Link to="/demo-gratuite">
                    <Button style={{ backgroundColor: "#FFAC26", color: "white", fontWeight: "bold", fontFamily: 'Roboto', fontSize: 25, paddingLeft: 100, paddingRight: 100 }} size="big" >Contactez nous</Button>
                </Link>
            </div>
            </Responsive>
            <Responsive minWidth={1024}>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
                <div style={{ fontSize: 24, fontWeight: "bold", color: "#FFAC26", fontFamily: 'Muli', marginBottom: 20 }}>Prêt à vous lancer ?</div>
                <Link to="/demo-gratuite">
                    <Button style={{ backgroundColor: "#FFAC26", color: "white", fontWeight: "bold", fontFamily: 'Roboto', fontSize: 25, paddingLeft: 130, paddingRight: 130 }} size="big" >Contactez nous</Button>
                </Link>
            </div>
            </Responsive>

        </>
    );
};

export default Partnership;