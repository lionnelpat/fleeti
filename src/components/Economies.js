import React from 'react';
import { Grid, Card, Responsive } from 'semantic-ui-react';
import EconomieItem from './EconomieItem';
import { economies } from '../variables/Economies';

function createMarkup(title) {
    return { __html: title };
}

const Economies = () => {
    return (
        <>
            <Responsive maxWidth={1024}>
                <p style={{ fontSize: 22, fontWeight: '600', color: "#0BA1C1", textAlign: "center" }}>Faites des économies sur vos <br /> véhicules en prenant les bonnes<br /> décisions</p>
                {economies.map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", marginTop: 30, flexDirection: "column" }}>
                        <div style={{ width: 110, textAlign: "center", height: 110, border: `solid ${item.color} 10px`, borderRadius: 500, display: "flex", justifyContent: "center", alignItems: "center" }} >
                            <p style={{ fontSize: 20, fontWeight: "bold", color: item.color }}>{item.prix}<br />
                                <span style={{ fontWeight: "normal" }}>{item.unit}</span>
                            </p>
                        </div>
                        <div style={{ flex: 1, width: "80%" }}>
                            <p style={{ fontSize: 20, textAlign: "center", fontFamily: 'Muli', color: 'rgba(33, 17, 3, 0.9)', fontWeight: '600', marginTop: 15 }} dangerouslySetInnerHTML={createMarkup(item.text3)}></p>
                            <p style={{ textAlign: "center", fontSize: 17, fontWeight: 'Muli', color: 'rgba(16, 16, 20, 0.7)' }}>{item.text2}</p>
                        </div>
                    </div>
                ))}
            </Responsive>
            <Responsive minWidth={1024}>
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
            </Responsive>

        </>



    );
};

export default Economies;