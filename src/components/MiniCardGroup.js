import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import MiniCard from './MiniCard';
import { miniCards } from '../variables/MiniCardGroup';

const MiniCardGroup = () => {
    return (
        <Card style={{width: "90%", marginTop: 100,padding:80,boxShadow: "none"}}  centered>
            <Grid columns={3} >
               
                {miniCards.map((item,i) =>  <MiniCard
                    title={item.title}
                    text={item.text}
                    img={item.img}
                    mt={i>2 ? 100: 0}
                
                />)}
            </Grid>
        </Card>
    );
};

export default MiniCardGroup;