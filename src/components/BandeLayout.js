import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

const BandeLayout = ({ children, illustration }) => {
    return (
        <Card style={{ width: "90%", paddingLeft: 60, paddingRight: 60, paddingTop: 20, boxShadow: "none" }} centered>
            <Grid columns={2} >
                <Grid.Row >
                    <Grid.Column width={7}>

                        <Card.Content style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            {children}
                        </Card.Content>
                    </Grid.Column>
                    <Grid.Column width={9}>

                        <Card.Content style={{ paddingLeft: 17 }}>
                            {illustration}
                        </Card.Content>
                    </Grid.Column>

                </Grid.Row>

            </Grid>
        </Card>
    );
};

export default BandeLayout;