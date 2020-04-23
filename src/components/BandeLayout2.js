import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import MiniCard from './MiniCard';


const BandeLayout2 = ({data=[]}) => {
    return (
        <Card style={{width: "90%",padding:80,boxShadow: "none"}}  centered>

            <Grid columns={3} >
                <Grid.Row>
                   
                    {data.map((item,i) => <MiniCard
                        key={i}
                        img={item.img}
                        title={item.title}
                        text={item.text}
                        knowMore={false}
                        height={100}

                        
                    />)}
                    
                </Grid.Row>
            </Grid>
        </Card>
    );
};

export default BandeLayout2;