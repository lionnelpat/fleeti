import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid, Responsive, Button } from 'semantic-ui-react';
import MiniCard from './MiniCard';
import { miniCards, miniCardsMobile } from '../variables/MiniCardGroup';

const MiniCardGroup = () => {
    return (
        <>
            <Responsive maxWidth={1024}>
                <p style={{ textAlign: "center", marginTop: 30, fontSize: 22, fontWeight: '600', fontFamily: 'Muli', color: "#0BA1C1" }}>Pourquoi nous choisir ?</p>
                <p style={{ textAlign: "center", marginTop: 20, marginBottom: 20, fontSize: 17, fontFamily: 'Muli', color: '#757575' }}>Un outils complet de pilotage de<br /> votre activité, intuitif et évolutif</p>

                <Grid >
                    <Grid.Row columns={1} >
                        {miniCardsMobile.map((item, i) => <MiniCard
                            key={i}
                            title={item.title}
                            text={item.text}
                            img={item.img}
                            mt={i > 2 ? 100 : 0}
                            link={item.link}
                            bg={i % 2 ? "white" : "#F5F5F5"}
                            fs={16.5098}
                            knowMoreSize={14.8588}
                        />)}
                    </Grid.Row>
                    <Grid.Row columns={1} centered>
                        <Grid.Column style={{ display: "flex", justifyContent: "center" }}>
                            <Link to="/demo-gratuite">
                                <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold", marginLeft: 10 }} size="big" >Démo gratuite</Button>
                            </Link>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Responsive>

            <Responsive minWidth={1024}>
                <div style={{ width: "100%", backgroundColor: "#FAFBFB" }}>

                    <Card style={{ width: "90%", padding: 60, boxShadow: "none", backgroundColor: "#FAFBFB" }} centered>
                        <div style={{ marginBottom: 10 }}>
                            <div style={{ marginBottom: 15 }}>
                                <span style={{ fontSize: 30, fontWeight: "bold", color: "#0BA1C1", fontFamily: 'Muli' }}>Pourquoi nous choisir ?</span>
                            </div>
                            <div style={{ height: 70 }}>
                                <span style={{ fontSize: 22, color: "#757575", fontWeight: 'normal', fontFamily: 'Roboto' }}>Un outil complet de pilotage de votre activité.</span>
                            </div>
                        </div>
                        <Grid columns={3} >
                            <Grid.Row>

                                {miniCards.map((item, i) => <MiniCard
                                    key={i}
                                    title={item.title}
                                    text={item.text}
                                    img={item.img}
                                    mt={i > 2 ? 30 : 0}
                                    link={item.link}
                                    height={i === 4 ? 187 : 200}
                                    knowMoreMargin={item.knowMoreMargin}
                                    mgleft={item.mgleft}
                                    mgright={item.mgright}
                                    fs={18}
                                    knowMoreSize={18}
                                    pt={40}
                                />)}
                            </Grid.Row>

                        </Grid>
                    </Card>
                </div>

            </Responsive>
        </>
    );
};

export default MiniCardGroup;
