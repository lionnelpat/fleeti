import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

const BandeLayout4 = ({ children, illustration }) => {
    return (
        <Card style={{ width: "90%", paddingLeft: 60, paddingRight: 60, paddingTop: 40, boxShadow: "none" }} centered>
            <Grid >
                <Grid.Row style={{ paddingLeft: 50, paddingRight: 50 }}>
                    <Grid.Column width={9}>

                        <Card.Content>
                            {children}
                        </Card.Content>
                    </Grid.Column>
                    <Grid.Column width={7}>

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