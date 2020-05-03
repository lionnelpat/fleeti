import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import MeetItem from './MeetItem';
import { meet } from '../variables/Meet';

const Meet = () => {
    return (
        <Card style={{width: "90%",padding:80,boxShadow: "none"}}  centered>
            <h1 style={{ fontSize: 50, color: "#0BA1C1" }}>Notre plus grande réussite ? Votre succès</h1>
            <p style={{ fontSize: 20, color: "#757575" }}>Nous avons à coeur de vous satisfaire. Rencontrez ceux qui travaillent pour vous au quotidien !</p>
            <Grid columns={2}>
                <Grid.Row>

                    {meet.map((item,i)=> <MeetItem
                        key={i}
                        img={item.img}
                        name={item.name}
                        description={item.description}
                        role={item.role}
                        
                        />)}
                </Grid.Row>
            </Grid>
        </Card>
    );
};

export default Meet;