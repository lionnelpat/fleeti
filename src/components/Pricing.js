import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import PricingBox from './PricingBox';
import { prix } from '../variables/Pricing';
import '../index.css'

const Pricing = () => {
    return (
        <Card style={{width: "90%",padding:80,boxShadow: "none"}}  centered>
            <div style={{paddingLeft:20, marginBottom:10}}>
                <div style={{marginBottom: 15}}>
                <span style={{ fontSize: 30, fontWeight:"bold",  color: "#0BA1C1", fontFamily:'Muli' }}>Nos offres</span>
            </div>
            <div style={{height:48}}>
                <span style={{ fontSize: 24, color: "#757575", fontWeight:'normal', fontFamily:'Robotto', fontFamily:'Roboto' }}>Le meilleur investissement pour votre activité</span>
            </div>
            </div>

            <Grid columns={4}>
            
            
            {prix.map(((item,i) => <PricingBox
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
            />))}
            </Grid>
        </Card>
    );
};

export default Pricing;