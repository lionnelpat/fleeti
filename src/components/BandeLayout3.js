import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

const BandeLayout3 = ({ children, illustration }) => {
    return (
        <Card style={{ width: "90%", padding: 60, boxShadow: "none" }} centered>
            <Grid >
                <Grid.Row style={{ alignItems: 'center' }}>
                    <Grid.Column width={7}>

                        <Card.Content>
                            {children}
                        </Card.Content>
                    </Grid.Column>
                    <Grid.Column width={9}>

                        <Card.Content>
                            {illustration}
                        </Card.Content>
                    </Grid.Column>

                </Grid.Row>

            </Grid>
        </Card>
    );
};

export default BandeLayout3;