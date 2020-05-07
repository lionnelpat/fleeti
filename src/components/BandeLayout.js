import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

const BandeLayout = ({children,illustration}) => {
    return (
        <Card style={{width: "90%", marginTop: 100,padding:0,boxShadow: "none"}}  centered>
        <Grid columns={2} >
            <Grid.Row >
                <Grid.Column >

                    <Card.Content style={{display: "flex", flexDirection:"column",alignItems: "center"}}>
                           {children}
                    </Card.Content>
                </Grid.Column>
                <Grid.Column>

                    <Card.Content style={{display: "flex", flexDirection:"column",alignItems: "center"}}>
                           {illustration}
                    </Card.Content>
                </Grid.Column>
                
            </Grid.Row>

        </Grid>
    </Card>
    );
};

export default BandeLayout;