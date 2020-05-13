import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

const BandeLayout = ({children,illustration}) => {
    return (
        <Card style={{width: "90%", marginTop: 100,padding:80,boxShadow: "none"}}  centered>
        <Grid columns={2} >
            <Grid.Row>
                <Grid.Column>

                    <Card.Content>
                           {children}
                    </Card.Content>
                </Grid.Column>
                <Grid.Column>

                    <Card.Content>
                           {illustration}
                    </Card.Content>
                </Grid.Column>
                
            </Grid.Row>

        </Grid>
    </Card>
    );
};

export default BandeLayout;