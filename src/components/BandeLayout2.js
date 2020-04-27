import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import MiniCard from './MiniCard';


const BandeLayout2 = ({data=[]}) => {
    return (
        <Card style={{width: "100%",padding:80,boxShadow: "none"}}  centered>
                
            <div style={{backgroundColor:"#0BA1C1", height:300,left:0,width:"100%", position:"absolute",marginTop:80}} />

            <Grid columns={3} >
                <Grid.Row>
                   
                    {data.map((item,i) => <MiniCard
                        key={i}
                        img={item.img}
                        title={item.title}
                        text={item.text}
                        knowMore={false}  
                        mt={0}   
                    />)}
                    
                </Grid.Row>
            </Grid>
        </Card>
    );
};

export default BandeLayout2;