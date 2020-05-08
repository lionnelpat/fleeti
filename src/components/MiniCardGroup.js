import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import MiniCard from './MiniCard';
import { miniCards } from '../variables/MiniCardGroup';
import "./MiniCardGroup.css"


const MiniCardGroup = () => {
    return (
        <div style={{width: "100%",backgroundColor:"#FAFBFB"}}>

        <Card style={{width: "90%",padding:80,boxShadow: "none",backgroundColor:"#FAFBFB"}}  centered>
        <p id="mcgtitre">Pourquoi nous choisir ?</p>
        <p id="mcgtext">Un outil complet de pilotage de votre activité.</p>
            <Grid columns={3} >
               <Grid.Row style={{marginTop: 30}}>

                {miniCards.map((item,i) =>  <MiniCard
                    key={i}
                    title={item.title}
                    text={item.text}
                    img={item.img}
                    mt={i>2 ? 30: 0}
                    link={item.link}
                    height={i===4 ? 187: 200}
                    mt2={i === 4 ? 43: undefined}
                    
                />)}
               </Grid.Row>
               
            </Grid>
        </Card>
        </div>
    );
};

export default MiniCardGroup;