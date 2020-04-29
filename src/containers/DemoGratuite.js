import React, { useEffect } from 'react';
import { Grid, Container, Image, Input, Button } from 'semantic-ui-react';
import img1 from '../img/img1.png'
import quote from "../img/quote.png"
import LogosPartners from '../components/LogosPartners';

const DemoGratuite = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return (
        <Container>
            <Grid>

                <Grid.Row columns={2} centered>
                    <Grid.Column>
                        <h1 style={{ fontSize: 50, color: "#0BA1C1" }}>Commencez votre essai gratuit </h1>
                        <p style={{ fontSize: 20 }}>Notre challenge ? 30 jours pour commencer à vous faire réaliser des économies. Profitez d’un accompagnement sur mesure et découvrez toute la puissance de Fleeti.
                    <br /><br />Pas de carte crédit requise, annulation possible à tout moment.</p>
                        <Image src={img1} />
                    </Grid.Column>
                    <Grid.Column>
                        <Container>
                            <Grid>
                                <Grid.Row columns={1} centered>
                                    <Grid.Column style={{ marginTop: 100 }}>
                                        <Input size="large" fluid placeholder='Nom et région' />
                                    </Grid.Column>
                                    <Grid.Column style={{ paddingTop: 20 }}>
                                        <Input size="large" fluid placeholder='Société' />
                                    </Grid.Column>
                                    <Grid.Column style={{ paddingTop: 20 }}>
                                        <Input size="large" fluid placeholder='Adresse Email' />
                                    </Grid.Column>
                                    <Grid.Column style={{ paddingTop: 20 }}>
                                        <Input size="large" fluid placeholder='Téléphone' />
                                    </Grid.Column>


                                </Grid.Row>
                                <Grid.Row>
                                    <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold", marginLeft: 10 }} size="big" >Envoyer</Button>

                                </Grid.Row>

                            </Grid>

                        </Container>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <LogosPartners/>
                </Grid.Row>
          
            </Grid>
                    <div style={{ textAlign: "center", fontSize: 25, display: "flex", justifyContent: "center", marginTop: 20 }}>
                        <Image src={quote} style={{ position: "absolute", right: "auto", left: "30vw" }} />
                        <p style={{ width: "40%", color: "#04212E" }}> “Fleeti nous a ouvert les yeux sur les dépenses liées à notre parc de véhicules. Nous sous-estimions largement les frais engagés et les économies à réaliser.” <br /><br />
                            <span style={{ color: "#0BA1C1", fontWeight: "bold" }}>J.Balsemin, Adneom </span>
                        </p>
                    </div>
                    <div style={{marginTop: 50}} />
        </Container>


    );
};

export default DemoGratuite;