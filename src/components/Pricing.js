import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import PricingBox from './PricingBox';
import { prix } from '../variables/Pricing';

const Pricing = () => {
    return (
        <Card style={{width: "90%",padding:80,boxShadow: "none"}}  centered>
            <h1 style={{ fontSize: 50, color: "#0BA1C1" }}>Nos offres</h1>
            <p style={{ fontSize: 20, color: "#757575" }}>Le meilleur investissement pour votre activité</p>

            <Grid columns={3}>
            
            
            {prix.map(((item,i) => <PricingBox
                key={i}
                color={item.color}
                prix={item.prix}
                height={item.height}
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