import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import MiniCard from './MiniCard';
import { miniCards } from '../variables/MiniCardGroup';

const MiniCardGroup = () => {
    return (
        
        <Card style={{width: "90%",padding:80,boxShadow: "none"}}  centered>
        <h1 style={{ fontSize: 50, color: "#0BA1C1" }}>Pourquoi nous choisir ?</h1>
        <p style={{ fontSize: 20, color: "#757575" }}>Un outil complet de pilotage de votre activité.</p>
            <Grid columns={3} >
               <Grid.Row>

                {miniCards.map((item,i) =>  <MiniCard
                    key={i}
                    title={item.title}
                    text={item.text}
                    img={item.img}
                    mt={i>2 ? 100: 0}
                
                />)}
               </Grid.Row>
               
            </Grid>
        </Card>
    );
};

export default MiniCardGroup;