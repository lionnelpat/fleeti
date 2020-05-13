import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

const BandeLayout4 = ({ children, illustration }) => {
    return (
        <Card style={{ width: "90%", padding: 60, boxShadow: "none" }} centered>
            <Grid >
                <Grid.Row style={{ paddingLeft: 50, paddingRight: 50 }}>
                    <Grid.Column width={8}>

                        <Card.Content>
                            {children}
                        </Card.Content>
                    </Grid.Column>
                    <Grid.Column width={8}>

                        <Card.Content>
                            {illustration}
                        </Card.Content>
                    </Grid.Column>

                </Grid.Row>

            </Grid>
        </Card>
    );
};

export default BandeLayout4;