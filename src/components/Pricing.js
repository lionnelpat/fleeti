import React from 'react';
import { Card, Grid, Responsive } from 'semantic-ui-react';
import PricingBox from './PricingBox';
import { prix } from '../variables/Pricing';
import '../index.css'

const Pricing = () => {
    return (
        <>
            <Responsive maxWidth={1024.9999} >
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <div style={{ width: "100%" }}>
                        <p style={{ fontSize: 22, color: "#0BA1C1", textAlign: "center", marginTop: 100, fontWeight: "600", fontFamily: 'Muli' }}>Nos offres</p>
                        <p style={{ textAlign: "center", marginTop: 25, marginBottom: 20, color: '#757575', fontSize: 17, fontFamily: 'Muli' }}>Le meilleur investissement pour<br /> votre activité</p>
                    </div>
                    <div class="ui stackable two column grid">

                        {prix.map(((item, i) => <div class="column"><PricingBox
                            key={i}
                            color={item.color}
                            prix={item.prix}
                            //height={item.height}
                            title={item.title}
                            unit={item.unit}
                            time={item.time}
                            text={item.text}
                            text2={item.text2}
                            features={item.features}
                            cardHeight={560}
                            boxWidth={300}
                            pb={'10%'}
                            mb={'10%'}
                        /></div>))}

                    </div>
                </div>


            </Responsive>
            <Responsive minWidth={1024}>

                <Card style={{ width: "90%", padding: 50, boxShadow: "none" }} centered>
                    <div style={{ paddingLeft: 20, marginBottom: 10 }}>
                        <div style={{ marginBottom: 15 }}>
                            <span style={{ fontSize: 30, fontWeight: "bold", color: "#0BA1C1", fontFamily: 'Muli' }}>Nos offres</span>
                        </div>
                        <div style={{ height: 70 }}>
                            <span style={{ fontSize: 24, color: "#757575", fontWeight: 'normal', fontFamily: 'Roboto' }}>Le meilleur investissement pour votre activité</span>
                        </div>
                    </div>

                    <Grid columns={4}>


                        {prix.map(((item, i) => <PricingBox
                            key={i}
                            color={item.color}
                            prix={item.prix}
                            //height={item.height}
                            title={item.title}
                            unit={item.unit}
                            time={item.time}
                            text={item.text}
                            text2={item.text2}
                            features={item.features}
                            boxWidth={'110%'}
                            pb={'0%'}
                            mb={'0%'}
                            cardHeight={'110%'}
                        />))}
                    </Grid>
                </Card>
            </Responsive>
        </>
    );
};

export default Pricing;
