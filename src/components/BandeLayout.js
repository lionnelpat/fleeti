import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

const BandeLayout = ({ children, illustration }) => {
    return (
        <Card style={{ width: "90%", padding: 60, boxShadow: "none" }} centered>
            <Grid >
                <Grid.Row>
                    <Grid.Column width={6}>

                        <Card.Content>
                            {children}
                        </Card.Content>
                    </Grid.Column>
                    <Grid.Column width={10}>

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