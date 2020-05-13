import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';
import GrilleItem from './GrilleItem';
import { grille } from '../variables/Grille';
import "./Grille.css"
import quote from "../img/quote.png"


const Grille = () => {
    return (
        <div>

            <Card style={{ width: "90%", padding: 60, boxShadow: "none" }} centered>
                <div style={{ marginBottom: 10 }}>
                    <div style={{ marginBottom: 15, width: '64%' }}>
                        <span style={{ fontSize: 30, fontWeight: "bold", color: "#0BA1C1", fontFamily: 'Muli', lineHeight: 1.4 }}>Prenez les meilleures décisions pour votre activité, <br />que vous soyez une PME ou une multinationale</span>
                    </div>
                    <div style={{ height: 55 }}>
                        <span style={{ fontSize: 24, color: "#757575", fontWeight: 'normal', fontFamily: 'Roboto' }}>Nos solutions s’adaptent à tous les secteurs d’activité.</span>
                    </div>
                </div>

                <Grid columns={3}>
                    <Grid.Row >

                        {grille.map((item, i) => <GrilleItem
                            key={i}
                            mt={8}
                            img={item.img}
                            title={item.title}
                        />)}

                    </Grid.Row>
                    <Grid.Row style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ width: "50%", display: "flex", position: "relative", marginTop: 50 }} >
                            <Image src={quote} style={{ position: "absolute", top: -35, left: -70 }} />
                            <p id="grText2" >
                                “Bien que nous soyons une PME avec un nombre limité de véhicules, Fleeti a pris le temps de comprendre notre fonctionnement et nous a permis d’économiser plus de 20% sur nos dépenses d’entretien par rapport à l’année dernière” <br />
                                <p style={{ textAlign: "center", fontWeight: "bold", color: "#0BA1C1", marginTop: 20 }}>F.Baudoin, Soram Ouest Africa</p>
                            </p>
                        </div>

                    </Grid.Row>
                </Grid>

            </Card>
        </div>
    );
};

export default Grille;
