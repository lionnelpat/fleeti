import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import EconomieItem from './EconomieItem';
import { economies } from '../variables/Economies';

const Economies = () => {
    return (
        <>

            <Card style={{ width: "90%", padding: 60, boxShadow: "none" }} centered>
                <div style={{ marginBottom: 10 }}>
                    <div style={{ marginBottom: 15 }}>
                        <span style={{ fontSize: 30, fontWeight: "bold", color: "#0BA1C1", fontFamily: 'Muli' }}>Faites des économies sur vos véhicules en prenant les bonnes décisions</span>
                    </div>
                    <div style={{ height: 70 }}>
                        <span style={{ fontSize: 19, lineHeight: 1.3, color: "#757575", fontWeight: 'normal', fontFamily: 'Roboto' }}>Avec fleeti, vous comprenez rapidement et simplement l’origine de vos coûts, comment les optimiser, grâce à un contrôle <br /> et suivi précis de l’état de vos véhicules, qu’il s’agisse de leur maintenance, consommation et trajets.</span>
                    </div>
                </div>
                <Grid columns={3} >
                    {economies.map((item, i) => <EconomieItem
                        key={i}
                        i={i}
                        prix={item.prix}
                        unit={item.unit}
                        text1={item.text1}
                        text2={item.text2}
                        color={item.color}
                    />)}
                </Grid>
            </Card>

        </>



    );
};

export default Economies;