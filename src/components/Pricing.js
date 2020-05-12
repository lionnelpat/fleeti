import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import PricingBox from './PricingBox';
import { prix } from '../variables/Pricing';
import "./Pricing.css"

const Pricing = () => {
    return (
        <Card style={{width: "90%",padding:80,boxShadow: "none"}}  centered>
            <p id="prTitre" >Nos offres</p>
            <p id="prText" >Le meilleur investissement pour votre activité</p>

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