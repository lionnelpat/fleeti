import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import LogoItem from './LogoItem';
import { logos } from '../variables/LogoPartners';

const LogosPartners = () => {
    return (
        <Card style={{ width: "77%", padding: 60, boxShadow: "none" }} centered>
            <h1 style={{ fontSize: 35, color: "#0BA1C1", textAlign: "center", fontFamily: 'Muli', fontWeight: 'bold' }}>Ils nous font confiance</h1>
            <Grid columns={5} style={{ marginTop: 50 }}>
                <Grid.Row centered>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {logos.map((item, i) => <LogoItem key={i} img={item} />)}

                    </div>
                </Grid.Row>

            </Grid>
        </Card>
    );
};

export default LogosPartners;