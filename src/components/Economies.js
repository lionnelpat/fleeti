import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import EconomieItem from './EconomieItem';
import { economies } from '../variables/Economies';

const Economies = () => {
    return (
        <>

        <Card style={{ width: "90%", padding: 80, boxShadow: "none" }} centered>
            <h1 style={{fontSize: 35,color:"#0BA1C1"}}>Faites des économies sur vos véhicules en prenant les bonnes décisions</h1>
            <p style={{fontSize: 20, color: "#757575"}}>Avec fleeti, vous comprenez rapidement et simplement l’origine de vos coûts, comment les optimiser, grâce à un contrôle et suivi précis de l’état de tous vos véhicules, qu’il s’agisse de leur maintenance, consommation et trajets.</p>
            <Grid columns={3} >
                {economies.map((item,i) => <EconomieItem 
                key={i}
                img={item.img}
                prix={item.prix}
                unit={item.unit}
                text1={item.text1}
                text2={item.text2}
                /> )}
            </Grid>
        </Card>

        </>



    );
};

export default Economies;