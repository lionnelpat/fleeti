import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import EconomieItem from './EconomieItem';
import { economies } from '../variables/Economies';
import "./Economies.css"


const Economies = () => {
    return (
        <>

        <Card style={{ width: "80%", boxShadow: "none" }} centered>
            <p id="titre2">Faites des économies sur vos véhicules en prenant les bonnes décisions</p>
            <p id="text1">Avec fleeti, vous comprenez rapidement et simplement l’origine de vos coûts, comment les optimiser, grâce à un contrôle et suivi précis de l’état de tous vos véhicules, qu’il s’agisse de leur maintenance, consommation et trajets.</p>
            <Grid columns={3} >
                {economies.map((item,i) => <EconomieItem 
                key={i}
                i={i}
                prix={item.prix}
                unit={item.unit}
                text1={item.text1}
                text2={item.text2}
                color={item.color}
                /> )}
            </Grid>
        </Card>

        </>



    );
};

export default Economies;