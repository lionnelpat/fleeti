import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import LogoItem from './LogoItem';
import { logos } from '../variables/LogoPartners';

const LogosPartners = () => {
    return (
        <Card style={{width: "90%", marginTop: 50,padding:80,boxShadow: "none"}}  centered>
            <h3 style={{textAlign:"center"}}>Ils nous font confiance</h3>
                <Grid columns={5}  style={{marginTop: 50}}>
                    <Grid.Row>
                        {logos.map((item,i) => <LogoItem key={i} img={item} />)}
                    </Grid.Row>

                </Grid>
            </Card>
    );
};

export default LogosPartners;