import React from 'react';
import { Button, Image, Input } from 'semantic-ui-react';
import img1 from '../img/img1.png'
import BandeLayout from './BandeLayout';
import { Link } from 'react-router-dom';

const Bande1 = () => {
    return (
        <BandeLayout
            illustration={<Image src={img1} />}
        >
            <h1 style={{ fontSize: 50, color: "#0BA1C1" }}>Une gestion de flotte réussie avec Fleeti</h1>
            <p style={{ fontSize: 20, color: "#757575" }}>La solution complète pour optimiser la gestion de vos véhicules et piloter votre entreprise.</p>

            <div>
                <Input placeholder='Adresse e-mail' size={"big"} />
                <Link to="/demo-gratuite">
                    <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold", marginLeft: 10 }} size="big" >démo gratuite</Button>
                </Link>

            </div>
            <p style={{ fontSize: 15, color: "#757575", marginTop: 20 }}>
                Essayez fleeti gratuitement pendant 30 jours, aucune carte de crédit n’est requise. En saisissant votre email, vous acceptez de recevoir des e-mails de la part de fleeti.
            </p>
        </BandeLayout>


    );
};

export default Bande1;