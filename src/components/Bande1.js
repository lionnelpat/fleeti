import React, { useState } from 'react';
import { Button, Image, Input } from 'semantic-ui-react';
import img1 from '../img/img1.png'
import BandeLayout from './BandeLayout';
import { Link } from 'react-router-dom';

const Bande1 = () => {
    const [state, setState] = useState({
        email: ""
    })
    return (
        <BandeLayout
            illustration={<Image src={img1} style={{ width: '94%', float: 'right' }} />}
            image={<Image src={img1} />}
            mobileTitle={<p style={{ fontSize: 22, fontFamily: 'Muli' }}>Connectez votre flotte</p>}
            title={<p style={{ fontSize: 33.4, fontWeight: 'bold', fontFamily: 'Muli' }}>Une gestion de flotte <br /> réussie avec fleeti</p>}
            text={<p style={{ fontSize: 17.22, fontFamily: 'Muli', textAlign: 'center', color: '#757575' }}>La solution complète pour optimiser<br /> la gestion de vos véhicules et piloter<br /> votre entreprise.</p>}
            minitext={<p style={{ fontSize: 10, color: "#757575", marginTop: 20, textAlign: "center", fontFamily: 'Muli' }}>Essayez fleeti gratuitement pendant 30 jours, aucune <br />carte de crédit n’est requise.</p>}
            showDemoBtn
        >
            <h1 style={{ fontSize: 40, color: "#0BA1C1", fontFamily: 'Muli', fontWeight: 'bold' }}>Une gestion de flotte<br /> réussie avec Fleeti</h1>
            <p style={{ fontSize: 24, fontFamily: 'Muli', color: "#757575" }}>La solution complète pour optimiser <br /> la gestion de vos véhicules et piloter<br /> votre entreprise.</p>

            <div>
                <Input placeholder='Adresse e-mail' size={"big"} value={state.email} onChange={({ target }) => setState({ email: target.value })} style={{ width: 205 }} />
                <Link to={
                    {
                        pathname: "/demo-gratuite",
                        state: {
                            email: state.email
                        }
                    }
                } >
                    <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold", marginLeft: 10 }} size="big" >démo gratuite</Button>
                </Link>

            </div>
            <p style={{ fontSize: 14, color: "#757575", marginTop: 20 }}>
                Essayez fleeti gratuitement pendant 30 jours, aucune carte de <br /> crédit n’est requise. En saisissant votre email, vous acceptez de <br /> recevoir des e-mails de la part de fleeti.
            </p>
        </BandeLayout>


    );
};

export default Bande1;