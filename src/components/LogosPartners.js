import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import LogoItem from './LogoItem';
import { logos } from '../variables/LogoPartners';

const LogosPartners = () => {
    return (
        <Card style={{width: "90%", marginTop: 50,padding:80,boxShadow: "none"}}  centered>
            <h1 style={{ fontSize: 50, color: "#0BA1C1", textAlign:"center" }}>Ils nous font confiance</h1>
                <Grid columns={5}  style={{marginTop: 50}}>
                    <Grid.Row>
                        {logos.map((item,i) => <LogoItem key={i} img={item} />)}
                    </Grid.Row>

                </Grid>
            </Card>
    );
};

export default LogosPartners;