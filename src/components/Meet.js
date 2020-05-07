import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import MeetItem from './MeetItem';
import { meet } from '../variables/Meet';
import "./Meet.css"

const Meet = () => {
    return (
        <Card style={{width: "90%",padding:80,boxShadow: "none"}}  centered>
            <p id="mTitle">Notre plus grande réussite ? Votre succès</p>
            <p id="mText"  >Nous avons à coeur de vous satisfaire. Rencontrez ceux qui travaillent pour vous au quotidien !</p>
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