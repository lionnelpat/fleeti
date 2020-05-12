import React, { useState } from 'react';
import { Button, Image, Input } from 'semantic-ui-react';
import img1 from '../img/img1.png'
import BandeLayout from './BandeLayout';
import { Link } from 'react-router-dom';
import "./Bande1.css"

const Bande1 = () => {
    const [state,setState] = useState({
        email: ""
    })
    return (
        <BandeLayout
            illustration={<Image src={img1} />}
        >
            <div style={{width: "70%"}}>
            <p id="title">Une gestion de flotte réussie avec Fleeti</p>
            <p id="text1">La solution complète pour optimiser la gestion de vos véhicules et piloter votre entreprise.</p>
            </div>

            <div style={{width: "70%",marginTop: 10}}>
                <Input id="input" placeholder='Adresse e-mail' size={"big"} value={state.email} onChange={({target})=>setState({email: target.value})} />
                <Link to={
                    {
                        pathname: "/demo-gratuite",
                        state: {
                            email: state.email
                        }
                    }
                } >
                    <Button style={{backgroundColor: "#0BA1C1" ,color: "white", width: 138,padding: 10, height: 50.12, marginLeft: 20}} size="big" >démo gratuite</Button>
                </Link>

            </div>

            <div style={{width: "70%",marginTop: 10}}>
                <p id="text2" >
                    Essayez fleeti gratuitement pendant 30 jours, aucune carte de crédit n’est requise. En saisissant votre email, vous acceptez de recevoir des e-mails de la part de fleeti.
                </p>
            </div>
        </BandeLayout>


    );
};

export default Bande1;